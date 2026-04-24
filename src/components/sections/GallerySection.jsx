import { useState } from "react";
import { motion } from "framer-motion";
import GallerySectionSkeleton from "../skeletons/GallerySectionSkeleton";
import ImageLightbox from "./ImageLightbox";

const GallerySection = ({ block, loading }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null); // null = مغلق

  if (loading) return <GallerySectionSkeleton />;

  const bigImage = block?.block_items[0]?.image_url;
  const images = block?.block_items[0]?.images_url ?? [];

  // كل الصور مجمعة: الكبيرة + الصغيرة
  const allImages = [bigImage, ...images].filter(Boolean);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goNext = () => setLightboxIndex((i) => (i + 1) % allImages.length);
  const goPrev = () =>
    setLightboxIndex((i) => (i - 1 + allImages.length) % allImages.length);

  // Variants (زي ما هي)
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
  };
  const mainImageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="container sectionPadding">
      <div className="space-y-4 lg:space-y-6">
        {/* الصورة الكبيرة - index 0 */}
        {bigImage && (
          <motion.div
            variants={mainImageVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full h-75 md:h-95 rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => openLightbox(0)}
          >
            <motion.img
              loading="lazy"
              src={bigImage}
              alt="gallery"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        )}
        {/* الصور الصغيرة - index 1, 2, 3... */}
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
              className="aspect-4/3 rounded-xl overflow-hidden cursor-pointer"
              onClick={() => openLightbox(index + 1)} // +1 عشان الكبيرة في index 0
            >
              {img && (
                <motion.img
                  loading="lazy"
                  src={img}
                  alt="thumb"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={allImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={goNext}
          onPrev={goPrev}
        />
      )}
    </section>
  );
};

export default GallerySection;
