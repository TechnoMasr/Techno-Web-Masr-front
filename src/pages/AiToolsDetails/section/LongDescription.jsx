import { Info } from "lucide-react";

const LongDescription = () => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm">
      <div className="flex items-center gap-2 mb-4 text-slate-900 border-b pb-3">
        <div className="flex items-center justify-center rounded-full w-8 h-8 bg-secondary/50">
          <Info className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold">نظرة عامة شاملة</h2>
      </div>
      <p className="text-sm md:text-base leading-relaxed font-normal whitespace-pre-line">
        DaVinci Resolve هو برنامج مونتاج فيديو شامل يستخدمه المحترفون في هوليود،
        ولكنه يقدم نسخة مجانية قوية بشكل لا يصدق تتجاوز قدرات العديد من البرامج
        المدفوعة. ما يجعله ذا صلة هو محركه العصبي (Neural Engine) الذي يشغل
        مجموعة من ميزات الذكاء الاصطناعي المذهلة، يمكنه عزل صوت الحوار عن خلفية
        صاخبة بنقرة واحدة (Voice Isolation)، أو تتبع وتحديد الأشخاص تلقائياً
        لإنشاء أقنعة متحركة (Magic Mask)، أو تحليل مقاطع الفيديو لفرزها حسب
        الأشخاص الموجودين فيها. هذه الأدوات، التي كانت تتطلب عملاً يدوياً
        معقداً، أصبحت الآن مؤتمتة وتسرع من سير عمل المحررين بشكل كبير، مما يجعل
        DaVinci Resolve خياراً لا يهزم لمن يبحث عن قوة احترافية مجاناً.
      </p>
    </div>
  );
};

export default LongDescription;
