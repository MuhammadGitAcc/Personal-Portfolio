import { useTranslation } from "react-i18next";

const SkipLink = () => {
  const { t } = useTranslation();

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
    >
      {t("common.skipToContent")}
    </a>
  );
};

export default SkipLink;
