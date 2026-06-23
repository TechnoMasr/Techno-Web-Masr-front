import { ArrowLeft, Star } from "lucide-react";
import { Link, useParams } from "react-router";
import { useTranslation } from "react-i18next";

const SimilarToolsSection = ({ data }) => {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-slate-900 px-1">
        {t("SimilarToolsSection.title")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.map((sTool) => (
          <Link
            to={`/${lang}/ai-tools/${sTool.slug}`}
            key={sTool.id}
            className="group bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 p-2 rounded-xl bg-slate-100 flex items-center justify-center shadow-sm">
                  {sTool.logo && (
                    <img
                      src={sTool.logo}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
                {sTool.rating && (
                  <span className="flex items-center gap-1 text-xs font-bold bg-slate-100 px-2 py-1 rounded-md">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    {sTool.rating}
                  </span>
                )}
              </div>
              <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
                {sTool.name}
              </h3>
              <p className="text-xs leading-relaxed line-clamp-2 mb-4">
                {sTool.short_description}
              </p>
            </div>

            <div className="text-xs font-bold group-hover:text-primary flex items-center gap-1 mt-2 transition-colors">
              <span>{t("SimilarToolsSection.explore")}</span>
              <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1 ltr:rotate-180 ltr:group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarToolsSection;
