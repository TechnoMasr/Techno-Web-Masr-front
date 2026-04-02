import { useMemo } from "react";
import { motion } from "framer-motion"; // <-- استدعاء framer-motion

const defaultTitle = "لماذا تختار تكنو ويب مصر";
const defaultDescription =
  "نحن في تكنو ويب مصر نصمم ونطور منصات وتطبيقات ذكية تساعد الشركات علي النمو والتفوق في التخصص الخاص بهم من خلال التطبيق او الموقع";

function getLocalized(value) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  const lang =
    typeof document !== "undefined" && document.documentElement.lang === "en"
      ? "en"
      : "ar";
  return value[lang] ?? value.ar ?? value.en ?? "";
}

const WhyChooseUsBanner = ({ block }) => {
  const title = useMemo(
    () => getLocalized(block?.title) || defaultTitle,
    [block?.title],
  );
  const description = useMemo(
    () => getLocalized(block?.description) || defaultDescription,
    [block?.description],
  );
  const bgImage = useMemo(() => {
    if (block?.image) {
      try {
        return typeof block.image === "string" && block.image.startsWith("http")
          ? block.image
          : import.meta.env.VITE_STORAGE_URL &&
              `${import.meta.env.VITE_STORAGE_URL}/${block.image}`;
      } catch {
        return;
      }
    }
  }, [block?.image]);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="relative w-full min-h-80 md:min-h-95 flex flex-col items-center justify-center text-center py-20 px-4 overflow-hidden"
      dir="rtl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Blurred background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center scale-105 -z-20"
        style={{ backgroundImage: `url(${bgImage})`, filter: "blur(8px)" }}
      />
      {/* Dark teal overlay */}
      <div
        className="absolute inset-0 w-full h-full -z-10"
        style={{ backgroundColor: "rgba(10, 54, 46, 0.88)" }}
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          variants={itemVariants}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-white text-lg md:text-xl max-w-4xl leading-relaxed opacity-95"
          variants={itemVariants}
        >
          {description}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default WhyChooseUsBanner;
