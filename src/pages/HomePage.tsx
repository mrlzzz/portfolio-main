import About from "../components/feature/About";
import Contact from "../components/feature/Contact";
import Projects from "../components/feature/Projects";
import { NavRefType } from "../components/types/NavRefType";

type HomePageProps = {
  navRefs: NavRefType;
};

const HomePage = ({ navRefs }: HomePageProps) => {
  return (
    <main>
      <About aboutRef={navRefs.about} />
      <Projects projectsRef={navRefs.projects} />
      <Contact contactRef={navRefs.contact} />
    </main>
  );
};

export default HomePage;
