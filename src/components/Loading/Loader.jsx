import { useTranslation } from "react-i18next";

const Loader = ({ textWhite = false }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center gap-4 min-h-75">
      {/* large spinner */}
      <div className="w-16 h-16 border-4 border-primary rounded-full animate-spin"></div>

      <h2
        className={`text-lg font-semibold ${textWhite ? "text-white" : "text-black"}`}
      >
        {t("loading")}
      </h2>
    </div>
  );
};

export default Loader;
