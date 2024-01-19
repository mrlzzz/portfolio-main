type SectionProps = {
  children: JSX.Element;
};

const Section = ({ children }: SectionProps) => {
  return (
    <section className="mx-auto mb-20 mt-4 h-fit min-h-[75vh] max-w-[1500px] p-2 last:mb-4 lg:mb-4">
      {children}
    </section>
  );
};

export default Section;
