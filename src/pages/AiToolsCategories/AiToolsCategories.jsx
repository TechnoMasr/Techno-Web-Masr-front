import PageBanner from "@/components/sections/PageBanner";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import image from "@/assets/icons/youtube.svg";
import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getAIToolsCategoriesPage } from "@/api/AIToolsServices";
import AiToolsCategoriesSkeleton from "@/components/skeletons/AiToolsCategoriesSkeleton";

const AiToolsCategories = () => {
  const steps = [
    {
      id: 1,
      title: "حدد هدفك",
      description: "فكر في نوع المهمة التي تريد إنجازها بدقة أولاً.",
      image: image,
    },
    {
      id: 2,
      title: "استكشف الفئة",
      description: "تصفح الأدوات المتاحة في الفئة المناسبة لعملك.",
      image: image,
    },
    {
      id: 3,
      title: "قارن الأدوات",
      description: "قارن بين الأدوات المختلفة في نفس الفئة لمعرفة الفروق.",
      image: image,
    },
    {
      id: 4,
      title: "جرب الأداة",
      description: "ابدأ باستخدام الأداة التي تناسب احتياجاتك وخلفيتك التقنية.",
      image: image,
    },
  ];

  const { lang } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["aiToolsCategoriesPage"],
    queryFn: getAIToolsCategoriesPage,
  });

  return (
    <main className="bg-slate-50">
      <PageBanner
        title={data?.hero?.title || "فئات أدوات الذكاء الاصطناعي"}
        description={
          data?.hero?.description ||
          "استكشف أدوات الذكاء الاصطناعي مصنفة حسب التخصص والاستخدام. اعثر على الأداة المناسبة لمجال عملك أو اهتمامك بسهولة."
        }
        loading={isLoading}
      />

      {/* قسم شبكة الفئات المطور */}
      <div className="container pagePadding space-y-8">
        {isLoading ? (
          <AiToolsCategoriesSkeleton />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.categories?.map((category) => (
              <Link
                to={`/${lang}/ai-tools?category=${category.id}`}
                key={category.id}
                className="group bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
              >
                {/* تأثير خلفية خفيف جداً يظهر عند الحوّم (Hover) */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-100 group-hover:bg-primary transition-colors duration-300" />

                <div>
                  {/* حاوية الأيقونة العصرية وعدد الأدوات */}
                  <div className="flex justify-between items-start mb-5">
                    <div
                      className={`w-18 h-18 p-2 rounded-xl bg-slate-100 flex items-center justify-center shadow-sm`}
                    >
                      {category.image_url && (
                        <img
                          src={category.image_url}
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      )}
                    </div>

                    <span className="text-xs font-bold text-slate-500 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg">
                      {category.tools_count || 0} أداة
                    </span>
                  </div>

                  {/* نصوص فئة الأداة */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors duration-200 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-xs md:text-sm font-medium leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                {/* زر التنقل الداخلي التفاعلي */}
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 group-hover:text-primary transition-colors duration-200 mt-auto pt-2 border-t border-slate-50">
                  <span>تصفح الفئة</span>
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        )}

        {data?.guidelines?.items.length > 0 && (
          <section className="w-full">
            <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight text-center mb-6">
              {data?.guidelines?.main_title || `كيفية اختيار الفئة المناسبة؟`}
            </h2>

            {/* شبكة الخطوات المتصلة */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {data?.guidelines?.items?.map((step, index) => (
                <div
                  key={index}
                  className="w-full bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center relative z-10 group"
                >
                  <span className="absolute top-3 right-3 text-xs font-black bg-slate-100 border border-slate-100 text-slate-500 w-5 h-5 flex items-center justify-center rounded-full">
                    {index + 1}
                  </span>

                  {/* حاوية الأيقونة الدائرية الملونة */}
                  <div
                    className={`w-14 h-14 p-2 rounded-2xl bg-slate-100 flex items-center justify-center shadow-inner mb-4 transition-transform group-hover:scale-105 duration-300`}
                  >
                    {step.image && (
                      <img
                        src={step.image}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>

                  {/* النصوص والعناوين */}
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default AiToolsCategories;
