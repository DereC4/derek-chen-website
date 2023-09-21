import ProjectBlock from "@/src/components/ProjectBlock";
import FadeInAnimation from "@/src/components/FadeInTransition";

const Projects = () => {
  return (
    <FadeInAnimation>
      <div className="wrapper blue-block items-center">
        <div className="default-margins">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:py-12 py-8">
            <ProjectBlock title={"Grade Distribution Viewer"} description={"User-friendly website providing easy access to up to date academic data for courses at UT Austin"} />
            <ProjectBlock title={"Earth Mobs Mod"} description={"A description"} />
            <ProjectBlock title={"Breaker"} description={"A description"} />
            <ProjectBlock title={"NASA APOD Visualizer"} description={"A description"} />
            <ProjectBlock title={"Sci-Fi Film \"SLORK WARS\""} description={"A description"} />
          </div>
        </div>
      </div>
    </FadeInAnimation>
  );
}

export default Projects;