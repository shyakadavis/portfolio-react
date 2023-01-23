import { SocialIcon } from './icons/social';
import { OtherIcon } from './icons/other';
import { Link } from 'react-router-dom';
import { AiOutlineComment } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';

interface Props {
  blog: IBlog;
}

interface IBlog {
  cover: string;
  title: string;
  caption: string;
  content: string;
  createdAt: Date;
  _id: string;
  comments: [];
  likes: [];
}

interface IComment {
  comment: string;
  user: string;
  createdAt: Date;
}

const Card: React.FC<Props> = ({ blog }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div className="h-full transform overflow-hidden rounded-md border-[1.2px] border-solid border-secondary bg-transparent bg-opacity-20 transition duration-250 hover:rounded-md hover:border-tertiary hover:bg-gray-300 dark:border-secondary dark:hover:border-tertiary dark:hover:bg-matte">
      <Link to={`/blog/${blog._id}`} state={blog}>
        <div className="p-6">
          <div className="flex flex-row items-center justify-between">
            <div className="my-2">
              <OtherIcon kind="folder" className="text-tertiary w-7" />
            </div>
            <div className="flex flex-row justify-between">
              <div className="mx-1.5 flex flex-row justify-between items-center">
                <FcLike /> {blog.likes?.length}
              </div>
              <div className="mx-1.5 flex flex-row justify-between items-center">
                <AiOutlineComment /> {blog.comments?.length}
              </div>
              <div className="mx-1.5">{}</div>
            </div>
          </div>
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {blog.title}
          </h2>

          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
            {blog.content}
          </p>
          <div className="flex flex-row justify-between">
            <div className="text-sm text-gray-400">
              {/* {tag1} &#8226; {tag2} &#8226; {tag3} */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  </div>
);

export default Card;
