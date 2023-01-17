import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogHeader from '../components/BlogHeader';
import CommentCard from '../components/CommentCard';
import CommentForm from '../components/CommentForm';
import Comments from '../components/Comments';
import Button from '../components/ui/Button';
import blogsData from '../data/blogsData';

interface IBlog {
  id: string;
  title: string;
  caption: string;
  content: string;
  imgSrc: string;
  href: string;
  tag1: string;
  tag2: string;
  tag3: string;
  createdAt: Date;
  comments: IComment[];
}

interface IComment {
  comment: string;
  user: string;
  createdAt: Date;
}
const Blog = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<IBlog>({
    id: '',
    title: '',
    caption: '',
    content: '',
    imgSrc: '',
    href: '',
    tag1: '',
    tag2: '',
    tag3: '',
    createdAt: new Date(),
    comments: [{ comment: '', user: '', createdAt: new Date() }],
  });

  useEffect(() => {
    const filteredBlog = blogsData.filter((blog) => blog.id === `${slug}`);
    setBlog(filteredBlog[0]);
  }, [slug]);

  return (
    <div>
      {typeof blog === 'object' && blog && blog.title && (
        <>
          <section>
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24">
              <div className="flex justify-between px-2 mx-auto max-w-screen-xl ">
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                  {/* Title, date and other headlines for the blog post */}
                  <BlogHeader
                    title={blog.title}
                    caption={blog.caption}
                    createdAt={blog.createdAt}
                  />
                  {blog.content}
                  <section className="not-format">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                        Comments ({blog.comments.length})
                      </h2>
                    </div>
                    {/* Form to submit a comment */}
                    <CommentForm />
                    {/* Iterate through our comments array and render them */}
                    {/* Since the section expects one child prop, and here we are passing more than 1, wrap the component in a React Fragment */}
                    <>
                      {blog.comments.map((item) => (
                        <CommentCard
                          comment={item.comment}
                          user={item.user}
                          createdAt={item.createdAt}
                        />
                      ))}
                    </>
                  </section>
                </article>
              </div>
            </main>
          </section>
        </>
      )}
    </div>
  );
};

export default Blog;
