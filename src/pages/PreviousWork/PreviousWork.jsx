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
import { motion } from "framer-motion";

const PreviousWork = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const { data: portfolioData, isLoading } = useQuery({
    queryKey: ["portfolio", selectedCategory],
    queryFn: () => getPortfolio(selectedCategory),
  });

  const seo = portfolioData?.seo;

  // Framer Motion variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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
            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {portfolioData?.portfolios?.map((item) => (
                <motion.li
                  key={item.id}
                  variants={cardVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <PreviousWorkCard item={item} />
                </motion.li>
              ))}
            </motion.ul>
          )}
        </section>
      </main>
    </>
  );
};

export default PreviousWork;
