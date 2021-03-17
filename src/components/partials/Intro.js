import { Link } from 'react-router-dom'

const Intro = () => {
    return (
        <>
            <div className="intro">
                <div className="content-wrapper">
                    <h1 className="color-dark font-bold"> Hi, I am <br /><span className="underline">  Parag Mahale. </span> </h1>
                    <h2 className="color-dark font-regular"> A <span className="underline"> web designer </span> and <span className="underline"> developer. </span> </h2>
                    <Link to="/about"> More about me </Link>
                </div>
            </div>
        </>
    )
}

export default Intro
