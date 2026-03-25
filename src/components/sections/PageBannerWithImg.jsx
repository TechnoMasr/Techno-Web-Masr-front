import bgImg from "@/assets/images/bg-img.png";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { HiArrowNarrowLeft } from "react-icons/hi";
import PageBannerWithImgSkeleton from "../skeletons/PageBannerWithImgSkeleton";
import useHandleAction from "@/hooks/useHandleAction";

const PageBannerWithImg = ({ block, loading }) => {
  const handleAction = useHandleAction();

  if (loading) return <PageBannerWithImgSkeleton />;

  // 🔥 Variants
  const containerVariant = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const phoneVariant = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section
      className="bg-center bg-cover w-full h-screen md:h-[80vh] content-center pt-24 pb-16 md:mb-14"
      style={{ backgroundImage: `url(${block.bg_image || bgImg})` }}
    >
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container w-full h-full flex flex-col justify-center md:flex-row items-center gap-10"
      >
        {/* 🔥 Phone / Image */}
        <motion.div
          variants={phoneVariant}
          className="w-full md:w-1/2 h-62.5 md:h-full"
        >
          <motion.img
            loading="lazy"
            src={block.image_url}
            alt=""
            className="w-[90%] sm:w-[60%] md:w-full h-full object-contain mx-auto md:translate-y-[35%] drop-shadow-xl"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* 🔥 Text Content */}
        <motion.div
          variants={fadeUp}
          className="w-full md:w-1/2 flex flex-col gap-2 items-center md:items-start text-center md:text-start capitalize"
        >
          <motion.h1
            variants={fadeUp}
            className="text-3xl lg:text-4xl font-medium text-white"
          >
            {block.title}
          </motion.h1>

          <motion.p variants={fadeUp} className="text-white/80 text-sm">
            {block.description}
          </motion.p>

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
      </motion.div>
    </section>
  );
};

export default PageBannerWithImg;
