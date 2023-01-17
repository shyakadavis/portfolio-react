import { SocialIcon } from '../icons/social';
import { OtherIcon } from '../icons/other';
import { Link } from 'react-router-dom';
interface Props {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
  href: string;
  tag1: string;
  tag2: string;
  tag3: string;
}
const Card: React.FC<Props> = ({
  id,
  title,
  description,
  imgSrc,
  href,
  tag1,
  tag2,
  tag3,
}) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div className="h-full transform overflow-hidden rounded-md border-[1.2px] border-solid border-secondary bg-transparent bg-opacity-20 transition duration-250 hover:rounded-md hover:border-tertiary hover:bg-gray-300 dark:border-secondary dark:hover:border-tertiary dark:hover:bg-matte">
      <Link to={`/blog/${id}`}>
        <div className="p-6">
          <div className="flex flex-row items-center justify-between">
            <div className="my-2">
              <OtherIcon kind="folder" className="text-tertiary w-7" />
            </div>
            <div className="flex flex-row justify-between ">
              {/* <div className="mx-1.5">
                {href ? (
                  <SocialIcon kind="internal" href={href} size={6} />
                ) : null}
              </div> */}
            </div>
          </div>
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {title}
          </h2>

          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
            {description}
          </p>
          <div className="flex flex-row justify-between">
            <div className="text-sm text-gray-400">
              {tag1} &#8226; {tag2} &#8226; {tag3}
            </div>
          </div>
        </div>
      </Link>
    </div>
  </div>
);

export default Card;
