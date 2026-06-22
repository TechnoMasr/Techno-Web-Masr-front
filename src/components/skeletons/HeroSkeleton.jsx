import { Skeleton } from "@/components/ui/skeleton";

const HeroSkeleton = () => {
  return (
    <section className="bg-center bg-cover w-full min-h-[80vh] content-center pt-24 pb-16 bg-primary">
      <div className="container w-full h-full flex flex-col md:flex-row items-center gap-4 md:gap-10">
        {/* Image Skeleton */}
        <div className="w-full md:w-1/2 h-62.5 md:h-100 flex items-center justify-center">
          <Skeleton className="w-[70%] sm:w-[60%] md:w-[90%] h-full rounded-full" />
        </div>

        {/* Content Skeleton */}
        <div className="w-full md:w-1/2 flex flex-col gap-3 items-center md:items-start text-center md:text-start">
          {/* Title */}
          <Skeleton className="h-8 w-3/4" />

          {/* Subtitle */}
          <Skeleton className="h-7 w-2/3" />

          {/* Paragraph */}
          <Skeleton className="h-4 w-full max-w-md" />
          <Skeleton className="h-4 w-5/6 max-w-sm" />
          <Skeleton className="h-4 w-2/3 max-w-xs" />

          {/* Button */}
          <Skeleton className="h-10 w-40 rounded-md mt-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSkeleton;
