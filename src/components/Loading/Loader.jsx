import { useTranslation } from "react-i18next";
import { GiCarWheel } from "react-icons/gi";

const Loader = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <GiCarWheel className="text-7xl lg:text-8xl text-primary animate-spin" />

      <h2 className="text-lg font-bold text-primary mt-4">{t("loading")}</h2>
    </div>
  );
};
export default Loader;
