import PageBanner from "@/components/sections/PageBanner";
import ServiceListSkeleton from "@/components/skeletons/ServiceListSkeleton";
import { getBlogs } from "@/api/pagesServices";
import { useQuery } from "@tanstack/react-query";
import EmptyDataSection from "@/components/sections/EmptyDataSection";
import { useTranslation } from "react-i18next";
import SeoManager from "@/utils/SeoManager";
import { motion } from "framer-motion";
import BlogCard from "@/components/cards/BlogCard";

const Blog = () => {
  const { t } = useTranslation();

  const { data: blogsData, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  const seo = blogsData?.seo;

  // Framer Motion Variants
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
        <PageBanner title={t("blog.title")} />

        <section className="container pagePadding">
          {isLoading ? (
            <ServiceListSkeleton />
          ) : blogsData?.services?.length === 0 ? (
            <EmptyDataSection msg={t("blog.noServices")} />
          ) : (
            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {blogsData?.blogs?.map((blog) => (
                <motion.li key={blog.id} variants={cardVariants}>
                  <BlogCard blog={blog} />
                </motion.li>
              ))}
            </motion.ul>
          )}
        </section>
      </main>
    </>
  );
};

export default Blog;
