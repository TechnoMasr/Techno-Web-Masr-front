import image from "@/assets/icons/youtube.svg";
import { Calendar, Layers, Star } from "lucide-react";

const HeadSection = () => {
  const tool = {
    name: "DaVinci Resolve",
    shortDescription:
      "برنامج تحرير ومونتاج فيديو احترافي وقوي للغاية، يقدم خطة مجانية بقدرات هائلة، ويتضمن أدوات ذكاء اصطناعي متقنة مثل تتبع الحركة، عزل الصوت، والتعرف على الوجوه.",
    longDescription:
      "DaVinci Resolve هو برنامج مونتاج فيديو شامل يستخدمه المحترفون في هوليود، ولكنه يقدم نسخة مجانية قوية بشكل لا يصدق تتجاوز قدرات العديد من البرامج المدفوعة. ما يجعله ذا صلة هو محركه العصبي (Neural Engine) الذي يشغل مجموعة من ميزات الذكاء الاصطناعي المذهلة، يمكنه عزل صوت الحوار عن خلفية صاخبة بنقرة واحدة (Voice Isolation)، أو تتبع وتحديد الأشخاص تلقائياً لإنشاء أقنعة متحركة (Magic Mask)، أو تحليل مقاطع الفيديو لفرزها حسب الأشخاص الموجودين فيها. هذه الأدوات، التي كانت تتطلب عملاً يدوياً معقداً، أصبحت الآن مؤتمتة وتسرع من سير عمل المحررين بشكل كبير، مما يجعل DaVinci Resolve خياراً لا يهزم لمن يبحث عن قوة احترافية مجاناً.",
    category: "إنتاج الفيديو والصوت",
    pricingType: "مجاني جزئياً",
    rating: 4.9,
    reviewsCount: 89,
    addedDate: "١٢ يوليو ٢٠٢٥",
    logoPlaceholder: image,
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 justify-between relative overflow-hidden">
      <div className="w-24 h-24 bg-slate-100 p-3 rounded-2xl flex items-center justify-center shadow-inner shrink-0 self-center md:self-start">
        <img
          src={tool.logoPlaceholder}
          alt={tool.name}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <h1 className="text-2xl md:text-3xl font-black text-slate-900">
            {tool.name}
          </h1>
          <span className="text-xs font-semibold bg-secondary/50 text-primary px-3 py-1 rounded-full">
            {tool.pricingType}
          </span>
        </div>
        <p className="text-sm md:text-base leading-relaxed mb-6">
          {tool.shortDescription}
        </p>

        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-4 border-t text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg text-slate-600">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />{" "}
            {tool.rating} ({tool.reviewsCount} مراجعة)
          </span>
          <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg text-slate-600">
            <Layers className="w-3.5 h-3.5 text-blue-500" /> {tool.category}
          </span>
          <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg text-slate-600">
            <Calendar className="w-3.5 h-3.5 text-emerald-500" /> أضيفت في:{" "}
            {tool.addedDate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeadSection;
