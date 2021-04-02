import { Link } from 'react-router-dom'
import Hamburger from './partials/Hamburger'

const Error500 = () => {
    return (
        <div className="error-wrapper">
        <Hamburger />
        <div className="content-wrapper error-container">
        <h2> Error : <span className="error-name"> 500 </span> </h2>
            <p> There is an issue while fetching data from APIs. </p>
            <Link to="/"> Return Home </Link>
        </div>
    </div>
    )
}

export default Error500
