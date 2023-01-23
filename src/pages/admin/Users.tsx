import React, { useEffect, useState } from 'react';
import { FcAddImage } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import client from '../../api/client';
import UsersRows from '../../components/admin/UsersRows';
import { toast } from 'react-toastify';

interface IBlogsData {
  cover?: string;
  surname: string;
  givenName: string;
  email: string;
  createdAt: Date;
  _id: string;
  comments: [];
  likes: [];
}

const Users = () => {
  const [data, setData] = useState<IBlogsData[]>([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await client.get('user/all');
      const data = await response.data;
      console.log('This is the data response: ', data);
      setData(data.data);
    } catch (error: any) {
      console.log('Seeking the error: ', error.response.data.statusCode);
      if ((error.response.data.statusCode = 401)) {
        notifyError(error.response.data.data[0].message);
      }
      console.log(`Error fetching users: `, error.message);
      notifyError(error.message);
    }
  };

  const notifyError = (message: string) =>
    toast.error(`${message}. 😟`, {
      theme: 'dark',
    });

  return (
    <section>
      <div id="app" className="min-h-screen subpixel-antialiased p-8 ">
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
                      <p>Surname</p>
                    </th>
                    <th className="text-center p-3">
                      <p>Given Name</p>
                    </th>
                    <th className="text-center p-3">
                      <p>Created At</p>
                    </th>
                    <th className="text-center p-3">
                      <p>Action</p>
                    </th>
                  </tr>
                </thead>
                <tbody className="flex-1 justify-center text-white sm:flex-none">
                  {data?.map((item, index) => (
                    <UsersRows
                      key={item._id}
                      index={index}
                      id={item._id}
                      surname={item.surname}
                      givenName={item.givenName}
                      createdAt={item.createdAt}
                      cover={item.cover}
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

export default Users;
