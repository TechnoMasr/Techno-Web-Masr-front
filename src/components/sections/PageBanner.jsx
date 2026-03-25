import bgImg from "@/assets/images/bg-img.png";
import { motion } from "framer-motion";
import PageBannerSkeleton from "../skeletons/PageBannerSkeleton";

const PageBanner = ({ title, block }) => {
  // 🔥 Variants
  const bannerVariant = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.article
      variants={bannerVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full min-h-64 bg-cover bg-center bg-primary relative content-end"
      style={{ backgroundImage: `url(${block?.bg_image || bgImg})` }}
    >
      <div className="relative z-10 container h-full pt-20 pb-4 lg:pb-10 flex flex-col items-start justify-end gap-2 lg:gap-4">
        {(title || block?.title) && (
          <motion.h1
            variants={bannerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl text-white capitalize"
          >
            {title ? title : block?.title || block?.name}
          </motion.h1>
        )}
      </div>
    </motion.article>
  );
};

export default PageBanner;
