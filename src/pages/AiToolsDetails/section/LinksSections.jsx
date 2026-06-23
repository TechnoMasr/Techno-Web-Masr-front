import { FaFolderOpen } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";
import { Link, useParams } from "react-router";
import { useTranslation } from "react-i18next";

const LinksSections = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const list = [
    {
      id: 1,
      title: t("LinksSections.browseCategories"),
      description: t("LinksSections.browseCategoriesDesc"),
      icon: RiRobot2Line,
      iconColor: "text-rose-600",
      iconBg: "bg-rose-50",
      url: `/${lang}/ai-tools-categories`,
    },
    {
      id: 2,
      title: t("LinksSections.allTools"),
      description: t("LinksSections.allToolsDesc"),
      icon: FaFolderOpen,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      url: `/${lang}/ai-tools`,
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-slate-900 px-1">
        {t("LinksSections.title")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {list.map((step) => {
          const IconComponent = step.icon;
          return (
            <Link
              to={step.url}
              key={step.id}
              className="w-full bg-white border border-slate-100 rounded-2xl p-6 shadow-sm 
              hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center relative z-10 group"
            >
              {/* حاوية الأيقونة الدائرية الملونة */}
              <div
                className={`w-14 h-14 rounded-2xl ${step.iconBg} flex items-center justify-center shadow-inner mb-4 transition-transform group-hover:scale-105 duration-300`}
              >
                <IconComponent
                  className={`w-7 h-7 ${step.stepColor || step.iconColor}`}
                />
              </div>

              {/* النصوص والعناوين */}
              <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-200">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">
                {step.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LinksSections;
