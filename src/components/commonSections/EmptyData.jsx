import { useTranslation } from "react-i18next";
import { HiOutlineFolderOpen } from "react-icons/hi";

const EmptyData = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 h-60 text-myGold animate-pulse">
      <HiOutlineFolderOpen className="text-[100px]" />

      <p className="text-center text-lg font-semibold">{t("noData")}</p>
    </div>
  );
};

export default EmptyData;
