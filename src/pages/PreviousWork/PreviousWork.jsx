import { getPortfolio } from "@/api/pagesServices";
import PreviousWorkCard from "@/components/cards/PreviousWorkCard";
import PreviousWorkFilter from "@/components/common/PreviousWorkFilter";
import EmptyDataSection from "@/components/sections/EmptyDataSection";
import PageBanner from "@/components/sections/PageBanner";
import PreviousWorkListSkeleton from "@/components/skeletons/PreviousWorkListSkeleton";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { useTranslation } from "react-i18next";
import SeoManager from "@/utils/SeoManager";

const PreviousWork = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const { data: portfolioData, isLoading } = useQuery({
    queryKey: ["portfolio", selectedCategory],
    queryFn: () => getPortfolio(selectedCategory),
  });

  const seo = portfolioData?.seo;

  return (
    <>
      <SeoManager
        title={seo?.meta_title}
        description={seo?.meta_description}
        keywords={seo?.keywords}
        canonical={seo?.canonical_url}
        ogImage={seo?.og_image_url}
      />

      <main>
        <PageBanner title={t("PreviousWork.title")} />

        <section className="container pagePadding space-y-4 lg:space-y-8">
          <PreviousWorkFilter />

          {isLoading ? (
            <PreviousWorkListSkeleton />
          ) : portfolioData?.portfolios?.length === 0 ? (
            <EmptyDataSection msg={t("PreviousWork.noWorks")} />
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {portfolioData?.portfolios?.map((item) => (
                <PreviousWorkCard key={item.id} item={item} />
              ))}
            </ul>
          )}
        </section>
      </main>
    </>
  );
};

export default PreviousWork;
