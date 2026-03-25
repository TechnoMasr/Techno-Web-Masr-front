import SectionTitle from "@/components/common/SectionTitle";
import image from "@/assets/images/Phone.png";
import { motion } from "framer-motion";
import PartnersSectionSkeleton from "../skeletons/PartnersSectionSkeleton";

const PartnersSection = ({ block, loading }) => {
  if (loading) return <PartnersSectionSkeleton />;

  // 🔥 Variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      className="bg-center bg-cover relative"
      style={{ backgroundImage: `url(${block.bg_image || image})` }}
    >
      <div className="absolute inset-0 bg-gray-100/90" />

      <div className="container sectionPadding relative z-10">
        <SectionTitle title={block?.title} />

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-8"
        >
          {block?.block_items?.map((itemData) => (
            <motion.li
              key={itemData.id}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow rounded-2xl border w-full aspect-video overflow-hidden p-2"
            >
              <img
                loading="lazy"
                src={itemData.image_url}
                alt="partner"
                className="w-full h-full object-contain"
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default PartnersSection;
