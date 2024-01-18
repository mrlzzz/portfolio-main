import Card from "../ui/Card";
import projects from "../../data/projectData";
const Projects = () => {
  const cards = projects.map((e, idx) => {
    return <Card key={idx} data={e} />;
  });

  return (
    <section className="mx-auto my-4 h-fit min-h-[75vh] max-w-[1500px] p-2">
      <div className="relative">
        <h1 className="relative left-6 mb-4 w-fit text-3xl font-bold uppercase text-gray-300 lg:left-10 lg:my-16 lg:text-5xl">
          Projects
        </h1>
        {/* <hr className="absolute top-7 h-3 w-48 border-0 bg-gray-900"></hr> */}
      </div>
      <div className="mx-auto flex flex-wrap justify-center ">{cards}</div>
    </section>
  );
};

export default Projects;
