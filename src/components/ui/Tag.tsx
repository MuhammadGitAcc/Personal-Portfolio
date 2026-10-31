type TagProps = {
  children: string;
};

const Tag = ({ children }: TagProps) => {
  return (
    <span className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
      {children}
    </span>
  );
};

export default Tag;
