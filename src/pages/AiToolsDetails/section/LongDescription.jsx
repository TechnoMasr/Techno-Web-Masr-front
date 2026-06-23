import { Info } from "lucide-react";
import { useTranslation } from "react-i18next";

const LongDescription = ({ text }) => {
  const { t } = useTranslation();

  if (!text) return null;

  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm">
      <div className="flex items-center gap-2 mb-4 text-slate-900 border-b pb-3">
        <div className="flex items-center justify-center rounded-full w-8 h-8 bg-secondary/50">
          <Info className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold">{t("LongDescription.title")}</h2>
      </div>
      <p className="text-sm md:text-base leading-relaxed font-normal whitespace-pre-line">
        {text}
      </p>
    </div>
  );
};

export default LongDescription;
