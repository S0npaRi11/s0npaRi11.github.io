// import { Link } from 'react-router-dom'
import { FaAt, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'

const Contacts = () => {
    return (
        <>
            <div className="contact">
                <div className="content-wrapper">
                    <h1 className="contact-heading color-light font-bold">  Contact Me <br />
                       
                    </h1>
                    <div className="contacts font-regular"> 
                        <a href="mailto:paragmahale36@gmail.com"> <FaAt /> </a>
                        {/* <div> */}
                            <a href="https://www.github.com/s0npaRi11" ><FaGithub /> </a>
                            
                            <a href="https://www.linkedin.com/in/parag-mahale-12b90019a/">  <FaLinkedin />  </a>
                            <a href="https://www.instagram.com/parag450/"> <FaInstagram /> </a>
                            <a href="https://www.facebook.com/parag.mahale/">  <FaFacebook /> </a>

                            {/* <div className="watermark"> Designed By : Parag Mahale </div> */}
                        {/* </div> */}
                    </div>
                </div>
                <div className="watermark"> Designed By : Parag Mahale </div>
            </div>
        </>
    )
}

export default Contacts
