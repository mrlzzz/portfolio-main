type SectionTitleProps = {
  text: string;
};

const SectionTitle = ({ text }: SectionTitleProps) => {
  // text-gray-300
  return (
    <h1 className="relative left-2 mb-4 w-fit text-3xl font-bold uppercase text-gray-300 lg:left-10 lg:mb-16 lg:mt-8 lg:text-5xl">
      {text}
    </h1>
  );
};

export default SectionTitle;
