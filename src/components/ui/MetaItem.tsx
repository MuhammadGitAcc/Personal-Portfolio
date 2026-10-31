import type { ReactNode } from "react";
import type { IconType } from "react-icons";

type MetaItemProps = {
  icon: IconType;
  children: ReactNode;
};

const MetaItem = ({ icon: Icon, children }: MetaItemProps) => {
  return (
    <div className="flex items-center justify-center md:justify-start">
      <Icon className="mr-2 flex-shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
};

export default MetaItem;
