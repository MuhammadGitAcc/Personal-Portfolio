type SectionHeadingProps = {
  title: string;
  id?: string;
};

const SectionHeading = ({ title, id }: SectionHeadingProps) => {
  return (
    <div className="flex flex-col items-center mb-12">
      <h2 id={id} className="text-3xl md:text-4xl font-bold mb-2 text-center">
        {title}
      </h2>
      <div className="w-20 h-1 bg-primary rounded" aria-hidden="true"></div>
    </div>
  );
};

export default SectionHeading;
