import Card from "../ui/Card";
import Section from "../ui/Section";
import projects from "../../data/projectData";
import SectionTitle from "../ui/SectionTitle";

type ProjectsProps = {
  projectsRef: React.RefObject<HTMLHeadingElement>;
};

const Projects = ({ projectsRef }: ProjectsProps) => {
  const cards = projects.map((e, idx) => {
    return <Card key={idx} data={e} />;
  });

  return (
    <Section>
      <>
        <SectionTitle text="Projects" navRef={projectsRef} />
        {/* <hr className="absolute top-7 h-3 w-48 border-0 bg-gray-900"></hr> */}

        <div className="mx-auto flex flex-wrap content-baseline justify-center">
          {cards}
        </div>
      </>
    </Section>
  );
};

export default Projects;
