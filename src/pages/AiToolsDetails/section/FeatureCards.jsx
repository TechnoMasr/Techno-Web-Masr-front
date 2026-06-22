import { CheckCircle2, Sparkles } from "lucide-react";

const FeatureCards = () => {
  const keyFeatures = [
    "محرر فيديو احترافي متعدد المسارات",
    "تصحيح ألوان هو الأقوى في الصناعة",
    "أدوات صوت متقدمة (Fairlight)",
    "مؤثرات بصرية (Fusion)",
    "ميزات ذكاء اصطناعي (Neural Engine)",
  ];

  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm">
      <div className="flex items-center gap-2 mb-6 text-slate-900 border-b pb-3">
        <div className="flex items-center justify-center rounded-full w-8 h-8 bg-secondary/50">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold">المميزات الرئيسية</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {keyFeatures.map((feature, i) => (
          <div key={i} className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
            <span className="text-sm font-semibold text-slate-700">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
