import PageBanner from "@/components/sections/PageBanner";
import ServiceCard from "@/components/cards/ServiceCard";
import ServiceListSkeleton from "@/components/skeletons/ServiceListSkeleton";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/api/pagesServices";
import EmptyDataSection from "@/components/sections/EmptyDataSection";
import { useTranslation } from "react-i18next";
import SeoManager from "@/utils/SeoManager";
import { motion } from "framer-motion";

const Products = () => {
  const { t } = useTranslation();

  const { data: productsData, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const seo = productsData?.seo;

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
        <PageBanner title={t("Products.title")} />

        <section className="container pagePadding">
          {isLoading ? (
            <ServiceListSkeleton />
          ) : productsData?.products?.length === 0 ? (
            <EmptyDataSection msg={t("Products.noProducts")} />
          ) : (
            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {productsData?.products?.map((service) => (
                <motion.li
                  key={service.id}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <ServiceCard service={service} type="product" />
                </motion.li>
              ))}
            </motion.ul>
          )}
        </section>
      </main>
    </>
  );
};

export default Products;
