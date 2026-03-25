import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { useRef, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useParams } from "react-router";

const MainSlider = ({
  data = [],
  renderItem,
  breakpoints = {
    0: { slidesPerView: 1 },
    480: { slidesPerView: 1.3 },
    570: { slidesPerView: 1.6 },
    640: { slidesPerView: 2 },
    720: { slidesPerView: 2.5 },
    960: { slidesPerView: 3 },
  },
  spaceBetween = 24,
  className = "",
}) => {
  const swiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const { lang } = useParams();

  // 🔥 Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const slideItem = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative w-full"
    >
      <Swiper
        dir={lang === "ar" ? "rtl" : "ltr"}
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        spaceBetween={spaceBetween}
        breakpoints={breakpoints}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={600} // 🔥 smoother transition
        className={`${className}`}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={item?.id || index}>
            <motion.div variants={slideItem}>{renderItem(item)}</motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔥 Desktop Buttons */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        animate={{ opacity: isBeginning ? 0.4 : 1 }}
        onClick={() => swiperRef.current?.slidePrev()}
        disabled={isBeginning}
        className="main_slider_btn layout prev"
      >
        <FaArrowLeftLong />
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.9 }}
        animate={{ opacity: isEnd ? 0.4 : 1 }}
        onClick={() => swiperRef.current?.slideNext()}
        disabled={isEnd}
        className="main_slider_btn layout next"
      >
        <FaArrowRightLong />
      </motion.button>

      {/* 🔥 Mobile Buttons */}
      <div className="flex items-center justify-center gap-4 mt-4 xl:hidden">
        <motion.button
          whileTap={{ scale: 0.9 }}
          animate={{ opacity: isBeginning ? 0.4 : 1 }}
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={isBeginning}
          className="main_slider_btn"
        >
          <FaArrowLeftLong />
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          animate={{ opacity: isEnd ? 0.4 : 1 }}
          onClick={() => swiperRef.current?.slideNext()}
          disabled={isEnd}
          className="main_slider_btn"
        >
          <FaArrowRightLong />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default MainSlider;
