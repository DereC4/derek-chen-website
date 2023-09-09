

const ProjectBlock = (props) => {
    return (
        <>
            <div className="project-block">
                <div className="flex flex-row justify-between">
                    <h1 className="text-5xl">
                        {props.title}
                    </h1>
                    <h2>
                        {props.description}
                    </h2>
                </div>
            </div>
        </>
    );
}

export default ProjectBlock;