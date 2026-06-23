import { Skeleton } from "../ui/skeleton";

const WhyChooseAiToolsSkeleton = () => {
  return (
    <section className="w-full py-6 lg:py-16 px-6 md:px-12 bg-primary rounded-3xl shadow-sm relative overflow-hidden">
      {/* لمسة جمالية خلفية ثابتة */}
      <div className="absolute top-0 inset-s-1/5 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      {/* هيكل عنوان السكشن */}
      <div className="text-center max-w-2xl mx-auto mb-8 md:mb-14 relative z-10 flex flex-col items-center">
        {/* عنوان السكشن */}
        <Skeleton className="h-8 w-48 md:w-64 bg-white/20 rounded-lg" />
        {/* الخط السفلي الصغير */}
        <Skeleton className="w-16 h-1 bg-secondary/50 mt-2 md:mt-4 rounded-full" />
      </div>

      {/* شبكة الكروت (تأخذ شكل 3 أعمدة في الشاشات الكبيرة) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-8 relative z-10">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="p-4 bg-white/90 rounded-2xl border-2 border-primary text-center md:text-start flex flex-col items-center md:items-start"
          >
            {/* مكان الأيقونة */}
            <Skeleton className="w-14 h-14 rounded-2xl mb-5 bg-black/10" />

            {/* العنوان الداخلي للكارت */}
            <Skeleton className="h-6 w-3/4 mb-3 bg-black/10 rounded-md" />

            {/* تفاصيل النص الداخلي (وصف الكارت) */}
            <div className="w-full space-y-2 flex flex-col items-center md:items-start">
              <Skeleton className="h-4 w-full bg-black/10 rounded-md" />
              <Skeleton className="h-4 w-5/6 bg-black/10 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseAiToolsSkeleton;
