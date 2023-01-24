import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import BlogHeader from '../components/BlogHeader';
import CommentCard from '../components/CommentCard';
import CommentForm from '../components/CommentForm';
import ScrollToTop from '../components/ScrollToTop';
import blogsData from '../data/blogsData';
import client from '../api/client';
import Loading from '../components/ui/Loader';

interface IBlog {
  _id: string;
  title: string;
  caption: string;
  content: string;
  cover: string;
  href: string;
  tag1: string;
  tag2: string;
  tag3: string;
  createdAt: Date;
  comments: IComment[];
  likes: [];
}

interface IComment {
  _id: string;
  comment: string;
  user: IUser;
  createdAt: string;
  blog: IBlog[];
}

interface IUser {
  surname: string;
  givenName: string;
}
const Blog = () => {
  const { slug } = useParams();
  const location = useLocation();
  // const blog = location.state;

  const [blog, setBlog] = useState<IBlog[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      // fetch the blog and comments concurrently
      setLoading(true);
      const [postResponse, commentsResponse] = await Promise.allSettled([
        client.get(`post/get/${slug}`),
        client.get(`post/${slug}/comment/all`),
      ]);

      // handle the post response
      if (postResponse.status === 'rejected') {
        const err = postResponse.reason;
        console.log(`Error fetching post: ${err}`);
      } else if (postResponse.status === 'fulfilled') {
        setLoading(false);
        const post = await postResponse.value.data;
        // you can now use the post data
        console.log(`This is the post: ${post.data[0]}`);
        // handle the logic to set the retrieved data
        setBlog(post.data);
      }

      // handle the comments response
      if (commentsResponse.status === 'rejected') {
        const err = commentsResponse.reason;
        console.log(`Error fetching comments: ${err}`);
      } else if (commentsResponse.status === 'fulfilled') {
        setLoading(false);
        const comments = await commentsResponse.value.data;
        // you can now use the comments data
        console.log(`These are the comments: ${comments.data}`);
        // handle the logic to set the retrieved data
        setComments(comments.data);
      }
    } catch (error: any) {
      console.log(`Error fetching posts: `, error.message);
    }
  };

  return (
    <>
      <div>
        <ScrollToTop />
        {blog.map((blog, index) => (
          <section>
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24">
              <div className="flex justify-between px-2 mx-auto max-w-screen-xl ">
                <article className="bg-matte p-5 rounded-xl shadow-2xl mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                  {/* Title, date and other headlines for the blog post */}
                  <BlogHeader
                    title={blog.title}
                    caption={blog.caption}
                    createdAt={blog.createdAt.toLocaleString()}
                    cover={blog.cover}
                  />
                  {blog.content}
                  <section className="not-format">
                    <div className="flex justify-between items-center mb-6 mt-6">
                      <h2 className="text-lg lg:text-2xl font-bold text-secondary">
                        Likes ({blog.likes?.length})
                      </h2>
                      <h2 className="text-lg lg:text-2xl font-bold text-secondary">
                        Comments ({blog.comments.length})
                      </h2>
                    </div>
                    {/* Form to submit a comment */}
                    <CommentForm postId={blog._id} />
                    {/* Iterate through our comments array and render them */}
                    {/* Since the section expects one child prop, and here we are passing more than 1, wrap the component in a React Fragment */}
                    <>
                      {comments.map((item: IComment) => (
                        <CommentCard
                          key={item._id}
                          comment={item.comment}
                          surname={item.user.surname}
                          givenName={item.user.givenName}
                          blog={item._id}
                          createdAt={item.createdAt}
                        />
                      ))}
                    </>
                  </section>
                </article>
              </div>
            </main>
          </section>
        ))}
      </div>
      {loading ? <Loading /> : null}
    </>
  );
};

export default Blog;
