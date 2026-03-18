import { Skeleton } from "../ui/skeleton";

const BranchesSectionSkeleton = ({ number = 2 }) => {
  const list = Array.from({ length: number }); // عدد الـ skeleton cards اللي تحب تظهره

  return (
    <section className="container pagePadding">
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
        {list.map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 bg-white p-3 border shadow rounded-lg font-medium animate-pulse"
          >
            <Skeleton className="w-full h-60 rounded-lg" /> {/* iframe / Map */}
            <Skeleton className="h-6 w-3/4 mt-2" /> {/* Title */}
            <Skeleton className="h-4 w-full" /> {/* Description */}
            <ul className="flex flex-col gap-4 mt-2">
              {Array.from({ length: 3 }).map((__, i) => (
                <li key={i} className="flex items-center gap-3 py-1">
                  <Skeleton className="w-8 h-8 rounded-full" /> {/* Icon */}
                  <div className="flex flex-col gap-1">
                    <Skeleton className="h-2 w-16" /> {/* label */}
                    <Skeleton className="h-3 w-20" /> {/* value */}
                  </div>
                </li>
              ))}
            </ul>
            <hr className="my-3" />
            <ul className="flex gap-4 mt-2">
              {Array.from({ length: 3 }).map((__, i) => (
                <li key={i}>
                  <Skeleton className="w-8 h-8 rounded-full" />{" "}
                  {/* social icon */}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BranchesSectionSkeleton;
