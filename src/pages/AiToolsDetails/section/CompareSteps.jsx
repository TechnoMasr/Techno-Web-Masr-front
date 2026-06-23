import { Lightbulb, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const CompareSteps = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
      <div className="flex items-center gap-2 mb-4 text-slate-900 border-b pb-3">
        <div className="flex items-center justify-center rounded-full w-8 h-8 bg-secondary/50">
          <Lightbulb className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold">{t("CompareSteps.title")}</h2>
      </div>

      {/* التقسيم الثنائي المتناسق */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {/* العمود الأول: الخطوات الإجرائية */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider bg-blue-50/90 inline-block px-3 py-1 rounded-md mb-4">
            {t("CompareSteps.basicSteps")}
          </h3>
          <ul className="relative space-y-3">
            {data?.steps.map((step, index) => (
              <li key={index} className="flex items-start gap-2 relative group">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border-2 border-blue-500 text-[10px] font-black text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-all duration-200">
                  {index + 1}
                </span>
                <p className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                  {step}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* العمود الثاني: نصائح وتوجيهات */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50/90 inline-block px-3 py-1 rounded-md mb-4">
            {t("CompareSteps.smartTips")}
          </h3>
          <ul className="space-y-3">
            {data?.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  {tip}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CompareSteps;
