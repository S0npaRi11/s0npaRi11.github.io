import Hamburger from './partials/Hamburger'
import ProjectGrid from './partials/ProjectGrid'
import Contact from './partials/Contacts'

const projects = ({ repos }) => {

    return (
        <>
            <div className="">
                <Hamburger />
                
               <div className="parallax-wrapper">
                    <div className="header parallax">
                        <h1> Projects </h1>
                    </div>
               </div>

                <div className="content">
                    <div className="content-wrapper">
                        <ProjectGrid  repos = {repos}/>
                    </div>
                </div>
            </div>
            <Contact />
        </>
    )
}

export default projects
