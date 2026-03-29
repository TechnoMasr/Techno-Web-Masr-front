import { motion } from "framer-motion";
import GallerySectionSkeleton from "../skeletons/GallerySectionSkeleton";

const GallerySection = ({ block, loading }) => {
  if (loading) return <GallerySectionSkeleton />;

  const bigImage = block?.block_items[0]?.image_url;
  const images = block?.block_items[0]?.images_url;

  // 🔥 Variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  const mainImageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="container sectionPadding">
      <div className="space-y-4 lg:space-y-6">
        {/* 🔥 Main Image */}
        <motion.div
          variants={mainImageVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full h-75 md:h-95 rounded-2xl overflow-hidden"
        >
          <motion.img
            loading="lazy"
            src={bigImage}
            alt="gallery"
            className="w-full h-full object-cover"
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        {/* 🔥 Thumbnails */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
        >
          {images?.map((img, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="aspect-4/3 rounded-xl overflow-hidden"
            >
              <motion.img
                loading="lazy"
                src={img}
                alt="thumb"
                className="w-full h-full object-cover"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
