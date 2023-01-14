import Header from '../components/Header'
import ProjectCard from '../components/ui/ProjectCard'
import projectsData from '../data/projectsData'

const Projects = () => {
  return (
    <section>
      <Header />
      <div className="-m-4 flex flex-wrap justify-center">
        {projectsData?.map((project, index) => (
          <ProjectCard
            key={index}
            title={project?.title}
            description={project?.description}
            imgSrc={project?.imgSrc}
            href={project?.href}
            github={project?.github}
            tech1={project?.tech1}
            tech2={project?.tech2}
            tech3={project?.tech3}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
