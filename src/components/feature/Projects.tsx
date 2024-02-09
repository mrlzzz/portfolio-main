import Card from "../ui/Card";
import Section from "../ui/Section";
import projects from "../../data/projectData";
import SectionTitle from "../ui/SectionTitle";

type ProjectsProps = {
  projectsRef: React.RefObject<HTMLElement>;
};

const Projects = ({ projectsRef }: ProjectsProps) => {
  const cards = projects.map((e, idx) => {
    return <Card key={idx} data={e} />;
  });

  return (
    <Section navRef={projectsRef}>
      <>
        <SectionTitle text="Projects" />
        <div className="mx-auto flex flex-wrap justify-center">{cards}</div>
      </>
    </Section>
  );
};

export default Projects;
