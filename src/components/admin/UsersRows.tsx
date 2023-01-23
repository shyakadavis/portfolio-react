import React from 'react';
import {
  FcAddImage,
  FcFinePrint,
  FcHighPriority,
  FcUpload,
} from 'react-icons/fc';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

interface IBlogProps {
  index: number;
  cover?: string;
  surname: string;
  givenName?: string;
  createdAt: Date;
  id: string;
}
const BlogsRows: React.FC<IBlogProps> = ({
  index,
  cover,
  surname,
  givenName,
  createdAt,
  id,
}) => {
  return (
    <tr
      v-for="(person, index) in persons"
      key={id}
      className="border-t first:border-t-0 flex p-1 md:p-3 hover:bg-primary md:table-row flex-col w-full flex-wrap justify-center"
    >
      {/* first column */}
      <td className="p-1 md:p-3">
        <label
          className="text-xs text-secondary uppercase font-semibold md:hidden"
          htmlFor=""
        >
          #
        </label>
        <p className="">{index + 1}</p>
      </td>
      {/* second column */}
      <td className="p-1 md:p-3">
        <label
          className="text-xs text-secondary uppercase font-semibold md:hidden"
          htmlFor=""
        >
          Cover
        </label>
        <img
          src={cover}
          className="w-24 h-24 object-cover rounded-lg flex justify-center"
        />
      </td>
      {/* third column */}
      <td className="p-1 md:p-3">
        <label
          className="text-xs text-secondary uppercase font-semibold md:hidden"
          htmlFor=""
        >
          Title
        </label>
        <p className="text-center">{surname}</p>
      </td>
      {/* fourth column */}
      <td className="p-1 md:p-3">
        <label
          className="text-xs text-secondary uppercase font-semibold md:hidden"
          htmlFor=""
        >
          Comments
        </label>
        <p className="text-center">{givenName}</p>
      </td>
      {/* fifth column */}
      <td className="p-1 md:p-3">
        <label
          className="text-xs text-secondary uppercase font-semibold md:hidden"
          htmlFor=""
        >
          Created At
        </label>
        <p className="text-center">{new Date(createdAt)?.toLocaleString()}</p>
      </td>

      {/* sixth column */}
      <td className="grid grid-cols-2 p-1 md:p-3 md:text-right">
        <FcFinePrint size={30} />
        <FcHighPriority size={30} />
      </td>
    </tr>
  );
};

export default BlogsRows;
