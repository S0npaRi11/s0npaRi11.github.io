import Hamburger from './partials/Hamburger'
import Contact from './partials/Contacts'
import image from './parag-mahale.jpg';

const about = () => {
    return (
        <>
            <Hamburger />
            <div className="header">
                <h1> About Me </h1>
            </div>

            <div className="content">
                <div className="content-wrapper">
                   <div className="about-me-grid">
                        <div className="about-me-info">
                            <p>
                                Hi, I am Parag Mahale (s0npaRi11 on github), a student, web designer and developer.
                                I am currently studying in a Computer Engineering couese at <a href="#"> SSVPS's B.S.Deore College of Engineering </a> located in Dhule, Maharashtra, India. 
                            </p>
                            <p>
                                I have worked on plenty of small scale projects and also have been working as a freelancer locally since past year.
                            </p>
                        </div>
                        <div className="about-me-picture">
                            <img src={image} alt="parag-mahale" className="image"/>
                        </div>
                   </div>
                </div>
            </div>

            <Contact />
        </>
    )
}

export default about
