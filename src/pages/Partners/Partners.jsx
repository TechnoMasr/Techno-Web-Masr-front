import PageBanner from "@/components/sections/PageBanner";
import PartnersListSkeleton from "@/components/skeletons/PartnersListSkeleton";
import EmptyDataSection from "@/components/sections/EmptyDataSection";
import { getPartners } from "@/api/pagesServices";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import SeoManager from "@/utils/SeoManager";
import { motion } from "framer-motion";

const Partners = () => {
  const { t } = useTranslation();
  const { data: PartnersData, isLoading } = useQuery({
    queryKey: ["Partners"],
    queryFn: getPartners,
  });

  const seo = PartnersData?.seo;

  // Framer Motion variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
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
        <PageBanner title={t("Partners.title")} />

        <section className="container pagePadding">
          {isLoading ? (
            <PartnersListSkeleton />
          ) : PartnersData?.clients?.length === 0 ? (
            <EmptyDataSection msg={t("Partners.noClients")} />
          ) : (
            <motion.ul
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {PartnersData?.clients?.map((item) => (
                <motion.li
                  key={item.id}
                  className="bg-white shadow rounded-md border w-full aspect-video
                    flex flex-col items-center text-center gap-2 p-4"
                  variants={cardVariants}
                >
                  <motion.div
                    className="h-24 w-full overflow-hidden mb-2 border border-transparent rounded-2xl hover:border-primary duration-300"
                    variants={contentVariants}
                  >
                    {item.image_url && (
                      <img
                        loading="lazy"
                        src={item.image_url}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </motion.div>

                  <motion.h3
                    className="font-semibold text-primary"
                    variants={contentVariants}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className="text-xs font-medium"
                    variants={contentVariants}
                  >
                    {item.description}
                  </motion.p>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </section>
      </main>
    </>
  );
};

export default Partners;
