import { Skeleton } from "../ui/skeleton";

const BlogDetailsSkeleton = () => {
  return (
    <main className="pt-20">
      <section className="container pagePadding space-y-4 lg:space-y-6">
        {/* اسكلتون صورة الغلاف المرتفعة */}
        <Skeleton className="w-full h-50 md:h-75 lg:h-125 rounded-2xl" />

        {/* اسكلتون العنوان الرئيسي */}
        <Skeleton className="h-7 lg:h-9 w-3/4 rounded-md" />

        {/* اسكلتون محتوى المقال (عبارة عن أسطر وهمية بأطوال مختلفة) */}
        <div className="space-y-3 pt-2">
          <Skeleton className="h-4 w-full rounded" />
          <Skeleton className="h-4 w-full rounded" />
          <Skeleton className="h-4 w-[92%] rounded" />
          <Skeleton className="h-4 w-[85%] rounded" />
          <div className="h-2" /> {/* مسافة فاصلة */}
          <Skeleton className="h-4 w-full rounded" />
          <Skeleton className="h-4 w-[95%] rounded" />
          <Skeleton className="h-4 w-[40%] rounded" />
        </div>

        {/* اسكلتون صندوق المشاركة السفلي */}
        <div className="max-w-lg mx-auto pt-6">
          <Skeleton className="h-16 w-full rounded-xl" />
        </div>
      </section>
    </main>
  );
};

export default BlogDetailsSkeleton;
