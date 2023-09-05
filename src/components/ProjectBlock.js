

const ProjectBlock = (props) => {
    return (
        <>
            <div className="flex flex-col w-full max-w-sm md:max-w-md lg:max-w-lg border-lime-200 border-4 rounded-md">
                <h1 className="text-5xl">
                    {props.projectTitle}
                </h1>
            </div>
        </>
    );
}   
 
export default ProjectBlock;