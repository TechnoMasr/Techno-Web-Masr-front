import useHandleAction from "@/hooks/useHandleAction";
import TechnoMasrTextBannerSkeleton from "../skeletons/TechnoMasrTextBannerSkeleton";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const TechnoMasrTextBanner = ({ block, loading }) => {
  const handleAction = useHandleAction();

  if (loading) return <TechnoMasrTextBannerSkeleton />;

  // 🔹 Variants for fade + slide-up
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className={`sectionPadding`}>
      <motion.div
        className="container max-w-2xl flex flex-col items-center text-center gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.h2
          className="text-3xl lg:text-4xl font-semibold text-primary"
          variants={fadeUp}
        >
          {block.title}
        </motion.h2>

        <motion.p className="font-medium" variants={fadeUp}>
          {block.description}
        </motion.p>

        <motion.div className="flex gap-2" variants={fadeUp}>
          <Button
            onClick={() =>
              handleAction(block?.other_data?.btn_1_url, {
                serviceId: block?.serviceId,
                serviceTitle: block?.serviceTitle,
              })
            }
            variant="secondary"
          >
            {block?.other_data?.btn_1_text}
          </Button>

          <Button
            onClick={() =>
              handleAction(block?.other_data?.btn_2_url, {
                serviceId: block?.serviceId,
                serviceTitle: block?.serviceTitle,
              })
            }
            variant="outline"
          >
            {block?.other_data?.btn_2_text}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechnoMasrTextBanner;
