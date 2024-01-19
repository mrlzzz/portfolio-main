type SectionProps = {
  children: JSX.Element;
};

const Section = ({ children }: SectionProps) => {
  return (
    <section className="mx-auto my-4 h-fit min-h-[75vh] max-w-[1500px] p-2">
      {children}
    </section>
  );
};

export default Section;
