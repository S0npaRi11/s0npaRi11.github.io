import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

import Projectcard from './ProjectCard'

const ProjectPreview = ({ repos }) => {

    const preview = [repos[0], repos[1]]

    return (
        <>
            <div className="projects">
                <div className="content-wrapper">
                    <h1 className="color-light font-bold">  Projects </h1>
                    <div className="porject-grid">
                        {/* { repos.length === 0 && <Redirect to="/500"/> } */}
                        {(preview[0] !== undefined && preview[1] !== undefined) && preview.map(r => (
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
