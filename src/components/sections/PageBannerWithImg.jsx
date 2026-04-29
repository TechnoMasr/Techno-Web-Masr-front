import phone from "@/assets/images/Phone.png";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { HiArrowNarrowLeft } from "react-icons/hi";
import PageBannerWithImgSkeleton from "../skeletons/PageBannerWithImgSkeleton";
import useHandleAction from "@/hooks/useHandleAction";
import { useEffect, useState } from "react";

const PageBannerWithImg = ({ block, loading }) => {
  const handleAction = useHandleAction();

  const [title, setTitle] = useState([]);

  useEffect(() => {
    setTitle(block.title.split("#"));
  }, [block]);

  console.log("block", block);

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
      className="bg-center bg-cover bg-primary w-full h-screen md:h-[500px] content-center pt-24 pb-16 md:mb-10"
      style={{ backgroundImage: `url(${block.bg_image_url})` }}
    >
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container w-full h-full flex flex-col justify-center md:flex-row items-center gap-10"
      >
        {/* 🔥 Phone / Image */}
        {/* <motion.div
          variants={phoneVariant}
          className="w-full md:w-1/2 h-62.5 md:h-full"
        > */}
        <motion.img
          loading="lazy"
          src={block.image_url}
          // src={phone}
          alt=""
          className="w-[90%] sm:w-[60%] md:w-1/2 h-[200px] md:h-[400px] object-contain mx-auto md:translate-y-[15%] drop-shadow-xl"
          transition={{ duration: 0.3 }}
        />
        {/* </motion.div> */}

        {/* 🔥 Text Content */}
        <motion.div
          variants={fadeUp}
          className="w-full md:w-1/2 flex flex-col gap-4 items-center md:items-start text-center md:text-start capitalize"
        >
          <motion.h1
            variants={fadeUp}
            className="text-2xl lg:text-3xl font-medium text-white"
          >
            {title[0]}
          </motion.h1>

          {/* Title line 2 */}
          <motion.h2
            variants={fadeUp}
            className="text-xl lg:text-2xl font-medium text-secondary -mt-2"
          >
            {title[1]}
          </motion.h2>

          <motion.div
            variants={fadeUp}
            dangerouslySetInnerHTML={{ __html: block.description }}
            className="text-white/70 text-xs leading-relaxed rich_content"
          />

          {block?.other_data?.btn_1_enabled && block?.other_data?.btn_1_url && (
            <motion.div variants={fadeUp}>
              <Button
                onClick={() =>
                  handleAction(block?.other_data?.btn_1_url, {
                    serviceId: block?.serviceId,
                    serviceTitle: block?.serviceTitle,
                  })
                }
                variant="secondary"
                className="mt-4 group"
              >
                {block?.other_data?.btn_1_text}
                <HiArrowNarrowLeft className="ltr:rotate-180 group-hover:-translate-x-1 ltr:group-hover:translate-x-1 transition-all duration-300" />
              </Button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PageBannerWithImg;
