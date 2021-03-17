import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars,FaTimes } from 'react-icons/fa'

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
                        <li> <Link to="/"> Home </Link>  </li>
                        <li>  <Link to="/projects"> Project </Link>  </li>
                        <li>  <Link to="/about"> About </Link>  </li>
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
