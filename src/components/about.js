import Hamburger from './partials/Hamburger'
import Contact from './partials/Contacts'

const about = () => {
    return (
        <>
            <Hamburger />
            <div className="header">
                <h1> About Me </h1>
            </div>

            <div className="content">
                <div className="content-wrapper">
                    Some Info About Me
                </div>
            </div>

            <Contact />
        </>
    )
}

export default about
