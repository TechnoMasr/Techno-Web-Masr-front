import { Skeleton } from "@/components/ui/skeleton";

const BranchSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-2 md:gap-6 bg-white p-3 border shadow rounded-lg font-medium animate-pulse">
      {/* Map */}
      <div className="rounded-lg md:w-1/2">
        <Skeleton className="w-full h-60 rounded-lg" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-1">
        <Skeleton className="h-6 w-1/2" /> {/* Title */}
        <Skeleton className="h-4 w-full" /> {/* Description */}
        <Skeleton className="h-4 w-5/6" />
        <ul className="flex flex-col gap-4 mt-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <li key={i} className="flex items-center gap-3 py-1">
              <Skeleton className="w-8 h-8 rounded-full" /> {/* Icon */}
              <div className="flex flex-col gap-1 flex-1">
                <Skeleton className="h-2 w-16" /> {/* label */}
                <Skeleton className="h-3 w-24" /> {/* value */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BranchSkeleton;
