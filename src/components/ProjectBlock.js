

const ProjectBlock = (props) => {
    return (
        <>
            <div className="flex flex-col w-full max-w-sm md:max-w-md lg:max-w-lg border-lime-200 border-4 rounded-md">
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