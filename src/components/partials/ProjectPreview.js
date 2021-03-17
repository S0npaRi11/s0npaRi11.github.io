import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

import Projectcard from './ProjectCard'

const ProjectPreview = ({ repos }) => {

    console.log(repos)

    const preview = [repos[0], repos[1]]

    console.log(preview)

    return (
        <>
            <div className="projects">
                <div className="content-wrapper">
                    <h1 className="color-light font-bold">  Projects </h1>
                    <div className="porject-grid">
                        {preview.map(r => (
                            <Projectcard key={r.id}  r={ r }/>
                        ))}

                        <Link to="/projects"> view all  <FaArrowRight /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectPreview
