import React from 'react';
import {
  FcAddImage,
  FcFinePrint,
  FcHighPriority,
  FcUpload,
} from 'react-icons/fc';
import Button from '../ui/Button';

interface IMailProps {
  index: number;
  name: string;
  email: string;
  subject: string;
  createdAt: Date;
  id: string;
  message: string;
}
const MailsRows: React.FC<IMailProps> = ({
  index,
  name,
  email,
  subject,
  createdAt,
  message,
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
          Name
        </label>
        <img
          src={name}
          className="w-24 h-24 object-name rounded-lg flex justify-center"
        />
      </td>
      {/* third column */}
      <td className="p-1 md:p-3">
        <label
          className="text-xs text-secondary uppercase font-semibold md:hidden"
          htmlFor=""
        >
          Subject
        </label>
        <p className="text-center">{subject}</p>
      </td>
      {/* fourth column */}
      <td className="p-1 md:p-3">
        <label
          className="text-xs text-secondary uppercase font-semibold md:hidden"
          htmlFor=""
        >
          Sent
        </label>
        <p className="text-center">{new Date(createdAt)?.toLocaleString()}</p>
      </td>
      {/* fifth column */}
      <td className="p-1 md:p-3">
        <label
          className="text-xs text-secondary uppercase font-semibold md:hidden"
          htmlFor=""
        >
          Message
        </label>
        <p className="text-center">{message.length}</p>
      </td>
      {/* seventh column */}
      <td className="grid grid-cols-2 p-1 md:p-3 md:text-right">
        <FcHighPriority size={30} />
      </td>
    </tr>
  );
};

export default MailsRows;
