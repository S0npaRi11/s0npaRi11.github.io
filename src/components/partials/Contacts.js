// import { Link } from 'react-router-dom'
import { FaAt, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'

const Contacts = () => {
    return (
        <>
            <div className="contact">
                <div className="content-wrapper">
                    <h1 className="contact-heading color-light font-bold">  Contact Me </h1>
                    <div className="contacts font-regular"> 
                        <a href="mailto:paragmahale36@gmail.com"> <FaAt /> : contact@email.com <br /> </a>
                        <div>
                            <a href="https://www.github.com" ><FaGithub /> </a>
                            
                            <a href="https://www.linkedin.com">  <FaLinkedin />  </a>
                            <a href="https://www.instagram.com"> <FaInstagram /> </a>
                            <a href="https://www.facebook.com">  <FaFacebook /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts
