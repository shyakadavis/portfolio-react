import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import BlogCard from '../components/ui/BlogCard';
import blogsData from '../data/blogsData';

const Blogs = () => {
  return (
    <section>
      <Header />
      <div className="-m-4 flex flex-wrap justify-center">
        {blogsData?.map((blog, index) => (
          <BlogCard
            id={index + 1}
            key={index}
            title={blog?.title}
            description={blog?.caption}
            imgSrc={blog?.imgSrc}
            href={blog?.href}
            tag1={blog?.tag1}
            tag2={blog?.tag2}
            tag3={blog?.tag3}
          />
        ))}
      </div>
      <ScrollToTop />
    </section>
  );
};

export default Blogs;
