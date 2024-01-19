import RandomAvatar from "../../utils/RandomAvatar";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const About = () => {
  return (
    <Section>
      <>
        <SectionTitle text="About me" />
        {/* <hr className="absolute top-7 h-3 w-48 border-0 bg-gray-900"></hr> */}

        <div className="about mx-auto flex h-[75vh] max-w-7xl justify-center divide-x-[0.5px] divide-red-400  border border-gray-600">
          <div className="flex w-[40%] flex-col items-center justify-center gap-4 ">
            <div className="flex items-center gap-4">
              <RandomAvatar />
              <div>
                <h1 className="text-3xl">Pawel Kowalinski</h1>
                <h2 className="text-gray-400">Software Engineer - Frontend</h2>
              </div>
            </div>
          </div>
          <div className="w-[60%]"></div>
        </div>
      </>
    </Section>
  );
};

export default About;
