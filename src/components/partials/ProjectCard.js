import {FaGithub, FaGlobe} from 'react-icons/fa'

const ProjectCard = ({ r }) => {
    return (
        <>
            <div className="project-card">
                <h3 className="project-card-heading"> { r.name } </h3>
                <p className="project-card-details"> { r.description }  |  { r.language }</p>
                <div className="project-card-links"> <a href="{ r.html_url }"> <FaGithub/> </a>  <a href="#"> <FaGlobe/> </a></div>
            </div>
        </>
    )
}

export default ProjectCard
