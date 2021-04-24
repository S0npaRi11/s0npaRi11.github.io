import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars,FaTimes, FaHome, FaAddressCard, FaProjectDiagram } from 'react-icons/fa'

const Hamburger = () => {

    const [show, setShow] = useState(false)

    const toggleHam = (e) => {
        e.preventDefault()

        setShow(!show)
    }

    return (
        <>
            <div className = "hamburger">
                <button id="hamburger-button" onClick={toggleHam}> <FaBars /> </button>
                {show && <div id="hamburger-menu">
                    <button onClick={toggleHam} id="ham-close"> <FaTimes/>  </button> 
                    <ul>
                        <li> <FaHome/> <Link to="/">  Home </Link>  </li>
                        <li>  <FaProjectDiagram /> <Link to="/projects">  Project </Link>  </li>
                        <li>  <FaAddressCard /> <Link to="/about">  About  </Link>  </li>
                    </ul>
                </div>  }
                
            </div>
        </>
    )
}

export default Hamburger

// TODO :
    /**
     * change a to link
     * toggle the menu n button click
     * stylise the menu
     */
