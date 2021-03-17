import Hamburger from './partials/Hamburger'

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
        </>
    )
}

export default about
