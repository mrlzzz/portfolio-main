import Card from "../ui/Card";
import projects from "../../data/projectData";
const Projects = () => {
  const cards = projects.map((e) => {
    return <Card data={e} />;
  });

  return (
    <section className="mx-auto my-4 h-fit min-h-[75vh] max-w-7xl p-2">
      <div className="mx-auto flex flex-wrap justify-center ">{cards}</div>
    </section>
  );
};

export default Projects;
