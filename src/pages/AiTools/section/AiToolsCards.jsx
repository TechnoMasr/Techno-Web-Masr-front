import { Button } from "@/components/ui/button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useParams } from "react-router";
import FiltersSections from "./FiltersSections";
import EmptyDataSection from "@/components/sections/EmptyDataSection";
import AiToolsCardsSkeleton from "@/components/skeletons/AiToolsCardsSkeleton";
import { useTranslation } from "react-i18next";

const AiToolsCards = ({
  ai_tools,
  totalCount,
  isLoading,
  isFetching,
  hasMore,
  remaining,
  onLoadMore,
  search,
  setSearch,
  category,
  setCategory,
}) => {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <section className="space-y-6">
      {/* تمرير قيم الفلترة والتحكم بها */}
      <FiltersSections
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        currentCount={ai_tools?.length || 0}
        totalCount={totalCount}
      />

      {/* حالة التحميل Skeleton أو Spinner */}
      {isLoading && ai_tools.length === 0 ? ( // ← initial load بس
        <AiToolsCardsSkeleton />
      ) : ai_tools?.length === 0 ? (
        <EmptyDataSection msg={t("AiToolsCards.noTools")} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ai_tools.map((tool) => (
            <div
              key={tool.id}
              className="group relative bg-white rounded-2xl border border-slate-100 p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start gap-2 mb-6">
                  <div className="w-20 h-20 p-2 rounded-xl bg-slate-50 shadow-inner group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300">
                    {tool.logo && (
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                  {tool.category && (
                    <div className="flex-1 flex justify-end">
                      <span className="text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                        {tool.category}
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm leading-relaxed mb-6 line-clamp-3 text-slate-600">
                  {tool.short_description}
                </p>
              </div>

              <Link to={`/${lang}/ai-tools/${tool.slug}`}>
                <Button className="w-full flex items-center justify-center gap-2">
                  {t("AiToolsCards.viewDetails")}
                  <FaArrowLeftLong className="ltr:rotate-180" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      )}

      {hasMore && (
        <div className="flex items-center justify-center">
          <Button
            variant="outline"
            className="text-sm py-2"
            onClick={onLoadMore}
            disabled={isFetching}
          >
            {isFetching
              ? t("AiToolsCards.loading")
              : t("AiToolsCards.showMore", { remaining })}
          </Button>
        </div>
      )}
    </section>
  );
};

export default AiToolsCards;
