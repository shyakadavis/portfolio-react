import React, { useEffect, useState } from 'react';
import { FcAddImage } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import client from '../../api/client';
import BlogsRows from '../../components/admin/BlogsRows';

interface IBlogsData {
  cover: string;
  title: string;
  caption: string;
  createdAt: Date;
  _id: string;
  comments: [];
  likes: [];
}

const AdminBlogs = () => {
  const [data, setData] = useState<IBlogsData[]>([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await client.get('post/all');
      const data = await response.data;
      console.log(data);
      setData(data.data);
    } catch (error: any) {
      console.log(`Error fetching posts: `, error.message);
    }
  };

  return (
    <section>
      <div
        id="app"
        className="min-h-screen subpixel-antialiased p-8 "
      >
        <div className="container space-y-8 text-base mx-auto">
          <div className="space-y-2">
            <Link to="/content/blogs/create">
              <FcAddImage size={40} />
            </Link>
            <div className="bg-matte border border-tertiary shadow-lg hover:shadow-xl rounded-md overflow-hidden">
              <table className="table table-auto w-full md:min-w-[1000px] leading-normal">
                <thead className="uppercase text-secondary text-base bg-primary">
                <tr className="hidden md:table-row">
              <th className="text-center p-3">
                <p>#</p>
              </th>
              <th className="text-center p-3">
                <p>Cover</p>
              </th>
              <th className="text-center p-3">
                <p>Title</p>
              </th>
              <th className="text-center p-3">
                <p>Created At</p>
              </th>
              <th className="text-center p-3">
                <p>Comments</p>
              </th>
              <th className="text-center p-3">
                <p>Likes</p>
              </th>
              <th className="text-center p-3"><p>Action</p></th>
            </tr>
                </thead>
                <tbody className="flex-1 justify-center text-white sm:flex-none">
                  {data?.map((item, index) => (
                    <BlogsRows
                      key={item._id}
                      index={index}
                      id={item._id}
                      title={item.title}
                      caption={item.caption}
                      createdAt={item.createdAt}
                      cover={item.cover}
                      comments={item.comments}
                      likes={item.likes}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminBlogs;
