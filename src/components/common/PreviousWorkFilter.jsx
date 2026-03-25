import { getPortfolioCategories } from "@/api/pagesServices";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

const PreviousWorkFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const { data: portfolioCategories } = useQuery({
    queryKey: ["portfolioCategories"],
    queryFn: getPortfolioCategories,
  });

  return (
    <ul className="flex items-center flex-wrap gap-3">
      {/* ALL */}
      <li
        onClick={() => setSearchParams({})}
        className={`relative px-5 py-2 rounded-xl text-sm font-medium cursor-pointer 
            transition-all duration-300 ease-in-out border
            ${
              !selectedCategory
                ? "bg-primary text-white border-primary shadow-md scale-105"
                : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary hover:bg-primary/5"
            }`}
      >
        الكل
        {!selectedCategory && (
          <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-8 h-1 bg-white rounded-full" />
        )}
      </li>

      {portfolioCategories?.map((item) => {
        const isActive = selectedCategory == item.slug;

        return (
          <li
            key={item.id}
            onClick={() => setSearchParams({ category: item.slug })}
            className={`relative px-5 py-2 rounded-xl text-sm font-medium cursor-pointer 
            transition-all duration-300 ease-in-out border
            ${
              isActive
                ? "bg-primary text-white border-primary shadow-md scale-105"
                : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary hover:bg-primary/5"
            }`}
          >
            {item.name}

            {isActive && (
              <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-8 h-1 bg-white rounded-full" />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default PreviousWorkFilter;
