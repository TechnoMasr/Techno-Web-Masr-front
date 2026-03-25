import { motion, AnimatePresence } from "framer-motion";
import TitleAndDescription from "../common/TitleAndDescription";
import { useParams } from "react-router";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import { Button } from "../ui/button";
import ImagesSliderSectionSkeleton from "../skeletons/ImagesSliderSectionSkeleton";
import useHandleAction from "@/hooks/useHandleAction";

const ImagesSliderSection = ({ block, loading }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleAction = useHandleAction();

  const { lang } = useParams();

  if (loading) return <ImagesSliderSectionSkeleton />;

  const images = block?.block_items[0]?.images_url;

  // 🔥 Variants
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const thumbsContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const thumbItem = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="container pagePadding grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      {/* 🔥 Content */}
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="order-2 md:order-1"
      >
        <TitleAndDescription
          title={block.title}
          description={block.description}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={() =>
              handleAction(block?.other_data?.btn_1_url, {
                serviceId: block?.serviceId,
                serviceTitle: block?.serviceTitle,
              })
            }
          >
            {block?.other_data?.btn_1_text}
          </Button>
        </motion.div>
      </motion.div>

      {/* 🔥 Slider */}
      <motion.div
        variants={fadeRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="order-1 md:order-2"
      >
        {/* Main Image */}
        <Swiper
          dir={lang === "ar" ? "rtl" : "ltr"}
          modules={[Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="rounded-xl overflow-hidden"
        >
          {images?.map((img, index) => (
            <SwiperSlide key={index}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={img}
                  loading="lazy"
                  src={img}
                  alt="product"
                  className="w-full aspect-4/3 object-cover rounded-xl"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🔥 Thumbnails */}
        <motion.div
          variants={thumbsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Swiper
            dir={lang === "ar" ? "rtl" : "ltr"}
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            className="mt-2"
          >
            {images?.map((img, index) => (
              <SwiperSlide key={index}>
                <motion.img
                  variants={thumbItem}
                  loading="lazy"
                  src={img}
                  alt="thumb"
                  className={`w-full aspect-4/3 object-cover rounded-lg cursor-pointer border transition-all ${
                    index === activeIndex
                      ? "border-2 border-primary"
                      : "border-gray-200 opacity-70"
                  }`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ImagesSliderSection;
