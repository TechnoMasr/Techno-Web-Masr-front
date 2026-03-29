import { motion } from "framer-motion";
import bgImg from "@/assets/images/bg-img.png";
import { Button } from "@/components/ui/button";
import { HiArrowNarrowLeft } from "react-icons/hi";
import HeroSkeleton from "../skeletons/HeroSkeleton";
import useHandleAction from "@/hooks/useHandleAction";
import { useEffect, useState } from "react";

const Hero = ({ block, loading }) => {
  const handleAction = useHandleAction();

  const [title, setTitle] = useState([]);

  useEffect(() => {
    setTitle(block.title.split("#"));
  }, [block]);

  if (loading) return <HeroSkeleton />;

  // 🔥 Variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7 },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-center bg-cover bg-primary w-full min-h-[80vh] content-center pt-24 pb-16"
      style={{ backgroundImage: `url(${block.bg_image_url || bgImg})` }}
    >
      <div className="container w-full h-full flex flex-col md:flex-row items-center gap-4 md:gap-10">
        {/* 🔥 Image */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 h-62.5 md:h-100"
        >
          <motion.img
            loading="lazy"
            src={block.image_url}
            alt=""
            className="w-[70%] sm:w-[60%] md:w-[90%] h-full object-contain mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        {/* 🔥 Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 flex flex-col gap-2 items-center md:items-start text-center md:text-start capitalize"
        >
          {/* Title line 1 */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl lg:text-4xl font-medium text-white"
          >
            {title[0]}
          </motion.h1>

          {/* Title line 2 */}
          <motion.h2
            variants={fadeUp}
            className="text-2xl lg:text-3xl font-medium text-secondary"
          >
            {title[1]}
          </motion.h2>

          {/* Description */}
          <motion.p variants={fadeUp} className="text-white/80 text-sm">
            {block.description}
          </motion.p>

          {/* Button */}
          <motion.div variants={fadeUp}>
            <Button
              onClick={() =>
                handleAction(block?.other_data?.btn_1_url, {
                  serviceId: block?.serviceId,
                  serviceTitle: block?.serviceTitle,
                })
              }
              variant="secondary"
              className="mt-6 group"
            >
              {block?.other_data?.btn_1_text}
              <HiArrowNarrowLeft className="ltr:rotate-180 group-hover:-translate-x-1 ltr:group-hover:translate-x-1 transition-all duration-300" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
