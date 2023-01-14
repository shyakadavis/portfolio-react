import SocialIcon from '../social-icons/index'
import FolderIcon from '../icon'

interface Props {
  title: string
  description: string
  imgSrc: string
  href: string
  github: string
  tech1: string
  tech2: string
  tech3: string
}
const Card: React.FC<Props> = ({
  title,
  description,
  imgSrc,
  href,
  github,
  tech1,
  tech2,
  tech3
}) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div className="h-full transform overflow-hidden rounded-md border-[1.2px] border-solid border-secondary bg-transparent bg-opacity-20 transition duration-500 hover:scale-105 hover:rounded-md hover:border-tertiary hover:bg-gray-300 dark:border-secondary dark:hover:border-tertiary dark:hover:bg-matte">
      <div className="p-6">
        <div className="flex flex-row items-center justify-between">
          <div className="my-2">{/* <FolderIcon /> */}</div>
          <div className="flex flex-row justify-between">
            <div className="mx-1.5">
              {href ? (
                <SocialIcon kind="external" href={href} size="6" />
              ) : null}
            </div>
            <div className="mx-1.5">
              {github ? (
                <SocialIcon kind="github" href={github} size="6" />
              ) : null}
            </div>
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
            {tech1} &#8226; {tech2} &#8226; {tech3}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Card
