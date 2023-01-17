import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../components/ui/Comments';
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
  });

  useEffect(() => {
    const filteredBlog = blogsData.filter((blog) => blog.id === `${slug}`);
    setBlog(filteredBlog[0]);
  }, [slug]);

  return (
    <div>
      {typeof blog === 'object' && blog && blog.title && (
        <>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
          <Comments />
        </>
      )}
    </div>
  );
};

export default Blog;
