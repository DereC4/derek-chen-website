import ProjectBlock from "@/src/components/ProjectBlock";

const Projects = () => {
    return (
        <div className="wrapper blue-block flex flex-col items-center">
            <ProjectBlock projectTitle={"UT Grade Distribution Viewer"} description={"A description"} />
            <ProjectBlock projectTitle={"Earth Mobs Mod"} description={"A description"} />
            <ProjectBlock projectTitle={"Breaker"} description={"A description"} />
            <ProjectBlock projectTitle={"NASA APOD Visualizer"} description={"A description"} />
            <ProjectBlock projectTitle={"Sci-Fi Film \"SLORK WARS\""} description={"A description"} />
        </div>
    );
}

export default Projects;