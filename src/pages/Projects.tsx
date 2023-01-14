import Header from '../components/Header'
import Card from '../components/ui/Card'
import projectsData from '../data/projectsData'

const Projects = () => {
  return (
    <section>
      <Header />
      <div className="-m-4 flex flex-wrap">
        {projectsData?.map((project, index) => (
          <Card
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
