import Hamburger from './partials/Hamburger'
import ProjectGrid from './partials/ProjectGrid'

const projects = ({ repos }) => {
    return (
        <div className="">
            <Hamburger />
            
            <div className="header">
                <h1> Projects </h1>
            </div>

            <div className="content">
                <div className="content-wrapper">
                    <ProjectGrid  repos = {repos}/>
                </div>
            </div>
        </div>
    )
}

export default projects
