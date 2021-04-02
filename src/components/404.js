import { Link } from 'react-router-dom'
import Hamburger from './partials/Hamburger'

const Error404 = () => {
    return (
        <div className="error-wrapper">
            <Hamburger />
            <div className="content-wrapper error-container">
                <h2> Error : <span className="error-name"> 404 </span> </h2>
                <p> The page you are trying to access does not exists. </p>
                <Link to="/"> Return Home </Link>
            </div>
        </div>
    )
}

export default Error404
