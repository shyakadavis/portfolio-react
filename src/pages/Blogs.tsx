import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import BlogCard from '../components/BlogCard';
import blogsData from '../data/blogsData';
import { useEffect, useState } from 'react';
import client from '../api/client';
import Loading from '../components/ui/Loader';

interface IBlogsData {
  cover: string;
  title: string;
  caption: string;
  content: string;
  createdAt: Date;
  _id: string;
  comments: [];
  likes: [];
}

const Blogs = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [blogs, setBlogs] = useState<IBlogsData[]>([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await client.get('post/all');
      const data = await response.data;
      console.log(data);
      setBlogs(data.data);
      setLoading(false);
    } catch (error: any) {
      console.log(`Error fetching posts: `, error.message);
    }
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <section>
        <Header />
        <div className="-m-4 flex flex-wrap justify-center">
          {blogs.map((blog, index) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
        <ScrollToTop />
      </section>
    </>
  );
};

export default Blogs;
