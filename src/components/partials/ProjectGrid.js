import ProjectCard from './ProjectCard'

const ProjectGrid = ({ repos }) => {
    return (
        <>
            <div className="project-grid">
                {repos.length > 0 &&
                    repos.map(r => (
                        <ProjectCard  key = {r.id} r = {r}/>
                    ))
                }
            </div>
        </>
    )
}

export default ProjectGrid
