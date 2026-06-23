import { Skeleton } from "../ui/skeleton";

const AiToolsDetailsSkeleton = () => {
  return (
    <main className="pt-20 bg-slate-50">
      <div className="container pagePadding grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* العمود الأيسر/الأيمن الكبير (ياخذ عمودين lg:col-span-2) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* 1. هيكل الـ HeadSection */}
          <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 justify-between relative overflow-hidden">
            {/* مكان اللوجو */}
            <Skeleton className="w-24 h-24 bg-slate-100 rounded-2xl shrink-0 self-center md:self-start" />

            <div className="flex-1 w-full">
              {/* العنوان ونوع التسعير */}
              <div className="flex flex-wrap items-center gap-3 mb-4 justify-center md:justify-start">
                <Skeleton className="h-8 w-48 bg-slate-100 rounded-lg" />
                <Skeleton className="h-6 w-20 bg-slate-100 rounded-full" />
              </div>

              {/* الوصف القصير */}
              <div className="space-y-2 mb-6">
                <Skeleton className="h-4 w-full bg-slate-100 rounded-md" />
                <Skeleton className="h-4 w-5/6 bg-slate-100 rounded-md" />
              </div>

              {/* الشارات السفلية للـ Head */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-4 border-t">
                <Skeleton className="h-7 w-28 bg-slate-50 rounded-lg" />
                <Skeleton className="h-7 w-36 bg-slate-50 rounded-lg" />
                <Skeleton className="h-7 w-32 bg-slate-50 rounded-lg" />
              </div>
            </div>
          </div>

          {/* 2. هيكل الـ LongDescription */}
          <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b pb-3">
              <Skeleton className="w-8 h-8 rounded-full bg-slate-100" />
              <Skeleton className="h-6 w-36 bg-slate-100 rounded-md" />
            </div>

            {/* أسطر الوصف الطويل */}
            <div className="space-y-3 pt-2">
              <Skeleton className="h-4 w-full bg-slate-100 rounded-md" />
              <Skeleton className="h-4 w-full bg-slate-100 rounded-md" />
              <Skeleton className="h-4 w-11/12 bg-slate-100 rounded-md" />
              <Skeleton className="h-4 w-full bg-slate-100 rounded-md" />
              <Skeleton className="h-4 w-3/4 bg-slate-100 rounded-md" />
            </div>
          </div>
        </div>

        {/* 3. هيكل الـ SidebarSection (يأخذ عمود واحد تلقائياً) */}
        <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm lg:sticky lg:top-28">
          {/* هيدر معلومات سريعة */}
          <div className="flex items-center gap-2 border-b pb-3 mb-4">
            <Skeleton className="w-8 h-8 rounded-full bg-slate-100" />
            <Skeleton className="h-6 w-28 bg-slate-100 rounded-md" />
          </div>

          {/* صفوف معلومات سريعة (5 صفوف) */}
          <div className="flex flex-col gap-4 mb-6">
            {[1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-slate-50/50 p-3 rounded-xl"
              >
                <Skeleton className="h-4 w-24 bg-slate-100 rounded-md" />
                <Skeleton className="h-4 w-20 bg-slate-100 rounded-md" />
              </div>
            ))}
          </div>

          {/* أزرار العمليات */}
          <div className="flex flex-col gap-2.5">
            <Skeleton className="w-full h-10 rounded-xl bg-slate-100" />
            <Skeleton className="w-full h-10 rounded-xl bg-slate-100" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AiToolsDetailsSkeleton;
