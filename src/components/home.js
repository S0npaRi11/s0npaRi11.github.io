import Hamburger from './partials/Hamburger'
import Intro from './partials/Intro'
import ProjectPreview from './partials/ProjectPreview'
import Contacts from './partials/Contacts'

const home = ({ repos }) => {
    return (
        <>
            <div className="container">

                {/* Hamburger menu */}
                <Hamburger />

                {/* Intro */}
                <Intro />

                { /* Project preview */ }
                <ProjectPreview  repos ={ repos }/>

                { /* Contacts here */ }
                <Contacts />
                
            </div>  
        </>
    )
}

export default home
