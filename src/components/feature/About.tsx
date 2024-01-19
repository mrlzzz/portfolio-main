import RandomAvatar from "../../utils/RandomAvatar";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const About = () => {
  return (
    <Section>
      <>
        <SectionTitle text="About me" />
        {/* <hr className="absolute top-7 h-3 w-48 border-0 bg-gray-900"></hr> */}

        <div className="mx-auto flex h-[75vh] max-w-7xl flex-col divide-y divide-gray-700 border border-gray-600 lg:flex-row lg:divide-x lg:divide-y-0">
          <div className="flex flex-col items-center justify-center py-10 lg:w-[40%]">
            <div className="flex items-center gap-5 ">
              <RandomAvatar />
              <div className="gap-2">
                <h1 className="text-2xl lg:text-3xl">Pawel Kowalinski</h1>
                <h2 className="text-sm text-gray-400 lg:text-base">
                  Software Engineer - Frontend
                </h2>
              </div>
            </div>
          </div>
          <div className="flex h-full flex-col items-center justify-center px-4 text-center lg:w-[60%]">
            <p className="max-w-xl">
              Software engineer skilled in TypeScript, React, and Node, with a
              solid academic foundation in computer science.
            </p>
          </div>
        </div>
      </>
    </Section>
  );
};

export default About;
