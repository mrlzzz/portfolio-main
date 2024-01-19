import Icon from "../../utils/Icon";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

// className="mx-auto mb-20 mt-4 h-fit min-h-[50vh] max-w-[1500px] p-2 lg:mb-4"
const Contact = () => {
  return (
    <Section>
      <>
        <SectionTitle text="Contact" />
        {/* <hr className="absolute top-7 h-3 w-48 border-0 bg-gray-900"></hr> */}

        <div className="mx-auto flex h-[50vh] max-w-7xl flex-col items-center justify-center gap-2 border border-gray-600">
          <span className="flex items-center gap-3 ">
            <a href="https://www.linkedin.com/in/pawel-kowalinski/">
              <Icon type="linkedIn" />
            </a>
            <span className="h-4 w-[2px] bg-gray-500" />
            <span className="flex gap-1 font-mono">
              <a href="mailto:cphpawel@gmail.com">
                <Icon type="mail" />
              </a>
              cphpawel@gmail.com
            </span>
          </span>
        </div>
      </>
    </Section>
  );
};

export default Contact;
