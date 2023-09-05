import ProjectBlock from "@/src/components/ProjectBlock";

const Projects = () => {
    return (  
        <div className="wrapper blue-block flex flex-col items-center">
            <ProjectBlock projectTitle={"UT Grade Distribution Viewer"} />
            <div className="project-block">
                Earth Mobs Mod
            </div>
            <div className="project-block">
                NASA APOD Visualizer
            </div>
            <div className="project-block">
                JavaScript Breaker
            </div>
            
            <div className="project-block">
                Sci-Fi Film “SLORK Wars”
            </div>
        </div>
    );
}
 
export default Projects;