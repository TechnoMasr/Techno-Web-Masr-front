// ImageLightbox.jsx
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import { useParams } from "react-router";

const ImageLightbox = ({ images, currentIndex, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const { lang } = useParams();

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Swiper */}
        <div
          className="w-full max-w-4xl px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <Swiper
            dir={lang === "ar" ? "rtl" : "ltr"}
            modules={[Navigation, Pagination, Zoom, Keyboard]}
            initialSlide={currentIndex}
            navigation
            pagination={{ clickable: true }}
            zoom={{ maxRatio: 3 }}
            keyboard={{ enabled: true }}
            centeredSlides={true} // ✅ ده المهم
            spaceBetween={20}
            className="lightbox-swiper"
          >
            {images.map((img, i) => (
              <SwiperSlide
                key={i}
                className="flex! items-center justify-center content-center"
              >
                <div className="swiper-zoom-container w-full flex items-center justify-center">
                  <img
                    src={img}
                    loading="lazy"
                    alt={`slide-${i}`}
                    className="w-full h-[80vh] object-contain rounded-xl my-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
};

export default ImageLightbox;
