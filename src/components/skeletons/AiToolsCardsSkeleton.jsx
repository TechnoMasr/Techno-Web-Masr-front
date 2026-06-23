import { Skeleton } from "../ui/skeleton";

const AiToolsCardsSkeleton = () => {
  // توليد مصفوفة من 8 عناصر لمحاكاة الكروت أثناء التحميل المبدئي
  const skeletonCards = Array.from({ length: 8 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {skeletonCards.map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm flex flex-col justify-between h-[340px]" // تحديد ارتفاع تقريبي لتجنب القفزات في التصميم
        >
          <div>
            {/* الجزء العلوي: اللوجو والتصنيف */}
            <div className="flex justify-between items-start gap-2 mb-6">
              {/* مكان اللوجو */}
              <Skeleton className="w-20 h-20 rounded-xl bg-slate-100" />

              {/* مكان شارة التصنيف (Category Badge) */}
              <Skeleton className="w-16 h-6 rounded-md bg-slate-100" />
            </div>

            {/* عنوان الأداة */}
            <Skeleton className="h-7 w-2/3 mb-3 bg-slate-100 rounded-lg" />

            {/* الوصف القصير (3 أسطر متدرجة في الطول لمحاكاة النص الحقيقي) */}
            <div className="space-y-2 mb-6">
              <Skeleton className="h-4 w-full bg-slate-100 rounded-md" />
              <Skeleton className="h-4 w-full bg-slate-100 rounded-md" />
              <Skeleton className="h-4 w-4/5 bg-slate-100 rounded-md" />
            </div>
          </div>

          {/* زر عرض التفاصيل السفلي */}
          <Skeleton className="w-full h-10 rounded-lg bg-slate-100" />
        </div>
      ))}
    </div>
  );
};

export default AiToolsCardsSkeleton;
