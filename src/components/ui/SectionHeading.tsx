type SectionHeadingProps = {
  title: string;
  id?: string;
};

const SectionHeading = ({ title, id }: SectionHeadingProps) => {
  return (
    <div className="flex flex-col items-center mb-12">
      <h2 id={id} className="text-3xl md:text-4xl font-bold text-center">
        {title}
      </h2>
      <div
        className="mt-4 h-px w-48 bg-gradient-to-r from-transparent via-primary to-transparent dark:via-primary-light"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default SectionHeading;
