import { ArrowLeft, Star } from "lucide-react";
import image from "@/assets/icons/youtube.svg";

const SimilarToolsSection = () => {
  const similarTools = [
    {
      id: 1,
      name: "ElevenLabs",
      rating: 4.8,
      description:
        "منصة رائدة في توليد الأصوات بالذكاء الاصطناعي، تشتهر بإنتاج أصوات طبيعية...",
    },
    {
      id: 2,
      name: "Udio",
      rating: 4.8,
      description:
        "منصة متقدمة لتوليد الموسيقى بالذكاء الاصطناعي، تتيح للمستخدمين إنشاء أغانٍ...",
    },
    {
      id: 3,
      name: "Suno AI",
      rating: 4.8,
      description:
        "أداة ذكاء اصطناعي ثورية تقوم بإنشاء أغاني كاملة - موسيقى وكلمات وغناء...",
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-slate-900 px-1">
        أدوات مشابهة قد تهمك
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {similarTools.map((sTool) => (
          <div
            key={sTool.id}
            className="group bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 p-2 rounded-xl bg-slate-100 flex items-center justify-center shadow-sm">
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="flex items-center gap-1 text-xs font-bold bg-slate-100 px-2 py-1 rounded-md">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  {sTool.rating}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
                {sTool.name}
              </h3>
              <p className="text-xs leading-relaxed line-clamp-2 mb-4">
                {sTool.description}
              </p>
            </div>
            <button className="text-xs font-bold group-hover:text-primary flex items-center gap-1 mt-2 transition-colors">
              <span>استكشف الأداة</span>
              <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarToolsSection;
