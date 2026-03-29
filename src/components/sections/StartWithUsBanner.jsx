import bgImg from "@/assets/images/bg-img.png";
import pcImg from "@/assets/images/pc-img.png";
import { Button } from "@/components/ui/button";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useHandleAction from "@/hooks/useHandleAction";

const StartWithUsBanner = ({ block }) => {
  const handleAction = useHandleAction();
  const [title, setTitle] = useState(block.title);

  useEffect(() => {
    setTitle(block.title.split("#"));
  }, [block]);

  // 🔥 Motion variants
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="container sectionPadding">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-center bg-cover bg-primary w-full min-h-72 content-center p-8 
        flex flex-col md:flex-row items-center gap-4 lg:gap-10 rounded-3xl shadow relative overflow-hidden"
        style={{ backgroundImage: `url(${block.bg_image_url || bgImg})` }}
      >
        <div className="absolute inset-0 bg-primary/80" />

        {/* Image */}
        <motion.div
          variants={imageVariant}
          className="w-full md:w-1/2 h-50 md:h-75 relative z-10"
        >
          <img
            loading="lazy"
            src={pcImg}
            alt=""
            className="w-[70%] sm:w-[60%] md:w-[90%] h-full object-contain mx-auto"
          />
        </motion.div>

        {/* Text + Buttons */}
        <motion.div
          variants={container}
          className="w-full md:w-1/2 flex flex-col gap-2 items-center md:items-start text-center md:text-start capitalize relative z-10"
        >
          <motion.h1
            variants={fadeUp}
            className="text-3xl lg:text-5xl font-medium text-white"
          >
            {title[0]}
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="text-2xl lg:text-3xl font-medium text-secondary"
          >
            {title[1]}
          </motion.h2>

          <motion.p variants={fadeUp} className="text-white text-lg my-4">
            {block.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center flex-wrap gap-2 mt-6"
          >
            <Button
              variant="secondary"
              className="min-w-40 group"
              onClick={() =>
                handleAction(block?.other_data?.btn_1_url, {
                  serviceId: block?.serviceId,
                  serviceTitle: block?.serviceTitle,
                })
              }
            >
              {block.other_data.btn_1_text}
              <HiArrowNarrowLeft className="ltr:rotate-180 group-hover:-translate-x-1 ltr:group-hover:translate-x-1 transition-all duration-300" />
            </Button>

            <Button
              variant="outline"
              className="min-w-40"
              onClick={() =>
                handleAction(block.other_data.btn_2_url, {
                  serviceId: block?.serviceId,
                  serviceTitle: block?.serviceTitle,
                })
              }
            >
              {block.other_data.btn_2_text}
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StartWithUsBanner;
