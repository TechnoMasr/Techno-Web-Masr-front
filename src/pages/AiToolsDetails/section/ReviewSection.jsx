import { ListChecks, Minus, Plus, ThumbsDown, ThumbsUp } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

const ReviewSection = ({ pros, cons }) => {
  const { t } = useTranslation();

  if ((!pros && !cons) || (!pros.length && !cons.length)) return null;

  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm">
      <div className="flex items-center gap-2 mb-6 text-slate-900 border-b pb-3">
        <div className="flex items-center justify-center rounded-full w-8 h-8 bg-secondary/50">
          <ListChecks className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold">{t("ReviewSection.title")}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* عمود المزايا */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-emerald-600 font-bold border-b border-emerald-50 pb-2">
            <ThumbsUp className="w-5 h-5" />
            <h3>{t("ReviewSection.pros")}</h3>
          </div>
          <ul className="space-y-3">
            {pros.map((pro) => (
              <li
                key={pro?.id}
                className="flex items-start gap-2.5 text-sm leading-relaxed"
              >
                <Plus className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0 bg-emerald-50 rounded-full p-0.5" />
                <span>{pro?.content}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* عمود العيوب */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-rose-600 font-bold border-b border-rose-50 pb-2">
            <ThumbsDown className="w-5 h-5" />
            <h3>{t("ReviewSection.cons")}</h3>
          </div>
          <ul className="space-y-3">
            {cons.map((con) => (
              <li
                key={con?.id}
                className="flex items-start gap-2.5 text-sm leading-relaxed"
              >
                <Minus className="w-4 h-4 text-rose-500 mt-0.5 shrink-0 bg-rose-50 rounded-full p-0.5" />
                <span>{con?.content}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
