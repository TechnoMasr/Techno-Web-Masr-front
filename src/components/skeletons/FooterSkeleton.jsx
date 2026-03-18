import { Skeleton } from "../ui/skeleton";

const FooterSkeleton = () => {
  const list = Array.from({ length: 5 });
  const social = Array.from({ length: 8 });

  return (
    <footer className="sectionPadding bg-center bg-cover relative bg-primary">
      <div
        className="container relative z-10 text-white
        flex flex-col md:flex-row gap-8"
      >
        {/* Logo + Description + Social */}
        <div className="flex flex-col items-center text-center md:items-start md:text-start gap-4 md:max-w-75 animate-pulse">
          <div className="w-26 overflow-hidden">
            <Skeleton className="w-full h-10" /> {/* Logo */}
          </div>
          <Skeleton className="h-3 w-full" /> {/* Description */}
          <Skeleton className="h-3 w-5/6" /> {/* Description */}
          <div className="flex items-center justify-center flex-wrap gap-4 border-t pt-4 w-full">
            {social.map((_, i) => (
              <Skeleton key={i} className="w-6 h-6 rounded-full" /> /* Social */
            ))}
          </div>
        </div>

        {/* Columns */}
        {[1, 2, 3].map((col) => (
          <div
            key={col}
            className="flex flex-col gap-4 min-w-1/6 animate-pulse"
          >
            <Skeleton className="h-5 w-24" /> {/* Title */}
            <ul className="space-y-2">
              {list.map((_, i) => (
                <li key={i}>
                  <Skeleton className="h-3 w-20" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default FooterSkeleton;
