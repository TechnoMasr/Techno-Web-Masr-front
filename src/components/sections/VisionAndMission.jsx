import SectionTitle from "@/components/common/SectionTitle";
import VisionAndMissionSkeleton from "../skeletons/VisionAndMissionSkeleton";
import { motion } from "framer-motion";

const VisionAndMission = ({ block, loading }) => {
  if (loading) return <VisionAndMissionSkeleton />;

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="container sectionPadding">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <SectionTitle title={block?.title} />
      </motion.div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {block?.block_items.map((item) => (
          <motion.li
            key={item.id}
            className="flex flex-col gap-2 bg-white text-primary shadow rounded-lg border p-3 hover:bg-primary hover:text-white duration-300 group"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {item.image_url && (
              <img
                loading="lazy"
                src={item.image_url}
                alt=""
                className="w-8 h-8 group-hover:invert group-hover:brightness-10 duration-300 object-contain"
              />
            )}
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-xs font-medium">{item.description}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default VisionAndMission;
