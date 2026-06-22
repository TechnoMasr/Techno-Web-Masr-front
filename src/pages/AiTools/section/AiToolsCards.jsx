import image from "@/assets/icons/youtube.svg";
import { Button } from "@/components/ui/button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";
import FiltersSections from "./FiltersSections";

const toolsData = [
  {
    id: 1,
    name: "DaVinci Resolve",
    description:
      "برنامج تحرير ومونتاج فيديو احترافي وقوي للغاية، يقدم خطة مجانية بقدرات هائلة، ويتضمن أدوات ذكاء اصطناعي متطورة.",
    category: "فيديو",
    icon: image,
    slug: "davinci-resolve",
  },
  {
    id: 2,
    name: "WolframAlpha",
    description:
      "محرك معرفة حسابي، يستخدم الذكاء الاصطناعي وخوارزميات معقدة للإجابة على الأسئلة وتحليل البيانات.",
    category: "تعليم ودراسة",
    icon: image,
    slug: "wolfram-alpha",
  },
  {
    id: 3,
    name: "Photoshop (Generative Fill)",
    description:
      "ميزة ثورية داخل برنامج Adobe Photoshop، تستخدم الذكاء الاصطناعي (Firefly) لتمكين التعديل الإبداعي السريع.",
    category: "تصميم",
    icon: image,
    slug: "photoshop",
  },
  {
    id: 4,
    name: "Photoman",
    description:
      "تطبيق جوال شهير يستخدم كاميرا هاتفك لمسح وحل المسائل الرياضية، مع تقديم شرح مفصل لكل خطوة.",
    category: "تعليم ودراسة",
    icon: image,
    slug: "photoman",
  },
];

const AiToolsCards = () => {
  return (
    <section className="space-y-6">
      <FiltersSections />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {toolsData.map((tool) => (
          <div
            key={tool.id}
            className="group relative bg-white rounded-2xl border border-slate-100 p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start gap-2 mb-6">
                <div className="w-20 h-20 p-2 rounded-xl bg-slate-50 shadow-inner group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300">
                  <img
                    src={tool.icon}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 flex justify-end">
                  <span className="text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                    {tool.category}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm leading-relaxed mb-6 line-clamp-3">
                {tool.description}
              </p>
            </div>

            <Link to={`/ai-tools/${tool.slug}`}>
              <Button className="w-full">
                عرض التفاصيل
                <FaArrowLeftLong className="" />
              </Button>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Button variant={`outline`}>عرض المزيد</Button>
      </div>
    </section>
  );
};

export default AiToolsCards;
