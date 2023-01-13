import Header from '../components/Header'
import { TbBrandReactNative } from 'react-icons/tb'
import { FaLaravel } from 'react-icons/fa'
import Button from '../components/ui/Button'

const Projects = () => {
  const projects = [
    {
      image: <TbBrandReactNative size={100} className="text-tertiary" />,
      title: 'Sfumato',
      product: 'Mobile App',
      description: 'Digital Market for artists and art lovers.',
      tech: 'React Native, Nodejs, MongoDB'
    },
    {
      image: <FaLaravel size={100} className="text-red-500" />,
      title: 'Library Management System',
      product: 'Web App',
      description:
        'A management system to assist librarians in tracking records of the library',
      tech: 'PHP Laravel, Tailwind CSS, MySQL'
    }
  ]
  return (
    <section>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div className="item">
            <div className="max-w-sm overflow-hidden rounded-lg shadow-md bg-matte border-gray-200 p-3">
              <a href="" className="grid justify-center">
                {project.image}
              </a>
              <div className="p-5">
                <a href="">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    {project.title}
                  </h5>
                </a>
                <p>
                  <h5 className="mb-2 text-xl font-normal text-gray-300">
                    {project.product}
                  </h5>
                </p>
                <p className="mb-3 font-normal text-gray-400">
                  {project.description}
                </p>
                <p className="mb-3 font-normal text-sm text-complementary">
                  {project.tech}
                </p>
                <a href="" className="inline-flex items-center px-3 py-2">
                  <Button children="Learn More" />
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
