const ProjectPreview = () => {
    return (
        <>
            <div className="projects">
                <div className="content-wrapper">
                    <h1 className="color-light font-bold">  Projects </h1>
                    <div className="porject-grid">
                        <div className="project-card">
                            <h3 className="project-card-heading"> Project 1 </h3>
                            <p className="project-card-details"> Details about Project 1 in short. </p>
                            <div className="project-card-links"> Project related links here (github link, etc) </div>
                        </div>
                        <div className="project-card">
                            <h3 className="project-card-heading"> Project 2 </h3>
                            <p className="project-card-details"> Details about Project 1 in short. </p>
                            <div className="project-card-links"> Project related links here (github link, etc) </div>
                        </div>

                        <a href="#"> view all </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectPreview
