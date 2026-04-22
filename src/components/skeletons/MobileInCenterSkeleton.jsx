import { Skeleton } from "@/components/ui/skeleton";

const MobileInCenterSkeleton = () => {
  const list = Array.from({ length: 6 });
  const leftItems = list.filter((_, i) => i % 2 === 0);
  const rightItems = list.filter((_, i) => i % 2 === 1);

  return (
    <section className="sectionPadding relative" dir="rtl">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[70%] h-[80%] bg-secondary/20 rounded-full blur-[120px]" />

      <div className="container">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          {/* Left Column */}
          <ul className="flex flex-col gap-10">
            {leftItems.map((_, index) => (
              <li
                key={index}
                className="flex flex-col items-center text-center gap-3"
              >
                <Skeleton className="w-10 h-10 rounded-full" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-32" />
                <Skeleton className="h-3 w-24" />
              </li>
            ))}
          </ul>

          {/* Center Image */}
          <div className="flex justify-center">
            <Skeleton className="w-45 h-80 rounded-xl" />
          </div>

          {/* Right Column */}
          <ul className="flex flex-col gap-10">
            {rightItems.map((_, index) => (
              <li
                key={index}
                className="flex flex-col items-center text-center gap-3"
              >
                <Skeleton className="w-10 h-10 rounded-full" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-32" />
                <Skeleton className="h-3 w-24" />
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col items-center gap-10 md:hidden">
          {/* Phone */}
          <Skeleton className="w-50 h-80 rounded-xl" />

          {/* Items */}
          <ul className="grid grid-cols-2 gap-6 w-full">
            {list.map((_, index) => (
              <li
                key={index}
                className="flex flex-col items-center text-center gap-3"
              >
                <Skeleton className="w-10 h-10 rounded-full" />
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-3 w-24" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MobileInCenterSkeleton;
