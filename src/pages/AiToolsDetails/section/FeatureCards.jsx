import { CheckCircle2, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const FeatureCards = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm">
      <div className="flex items-center gap-2 mb-6 text-slate-900 border-b pb-3">
        <div className="flex items-center justify-center rounded-full w-8 h-8 bg-secondary/50">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold">{t("FeatureCards.title")}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {data?.map((feature) => (
          <div key={feature?.id} className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
            <span className="text-sm font-semibold text-slate-700">
              {feature?.content}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
