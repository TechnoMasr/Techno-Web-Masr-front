import { Skeleton } from "../ui/skeleton";

const AiToolsCategoriesSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-[220px]"
        >
          <div>
            {/* حاوية الأيقونة وعدد الأدوات */}
            <div className="flex justify-between items-start mb-5">
              {/* الأيقونة */}
              <Skeleton className="w-18 h-18 rounded-xl bg-slate-200" />
              {/* شارة عدد الأدوات */}
              <Skeleton className="w-16 h-7 rounded-lg bg-slate-200" />
            </div>

            {/* عنوان الفئة */}
            <Skeleton className="h-5 w-1/2 bg-slate-200 mb-3 rounded-md" />
            {/* الوصف (سطرين) */}
            <Skeleton className="h-3.5 w-full bg-slate-200 mb-2 rounded-md" />
            <Skeleton className="h-3.5 w-4/5 bg-slate-200 rounded-md" />
          </div>

          {/* زر التنقل السفلي */}
          <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-50">
            <Skeleton className="h-4 w-20 bg-slate-200 rounded-md" />
            <Skeleton className="w-4 h-4 rounded-full bg-slate-200" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AiToolsCategoriesSkeleton;
