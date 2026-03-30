import useHandleAction from "@/hooks/useHandleAction";
import TitleAndDescription from "../common/TitleAndDescription";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const TechnologySection = ({ block }) => {
  const handleAction = useHandleAction();

  // 🔹 motion variants
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className={`sectionPadding`}>
      <div className="container space-y-8">
        {/* Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <TitleAndDescription title={block.title} />
        </motion.div>

        {/* Items Grid */}
        <motion.ul
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {block.block_items.map((item) => (
            <motion.li
              key={item.id}
              className="bg-white shadow rounded-md border w-full aspect-video
              flex flex-col items-center text-center gap-2 p-4"
              variants={fadeUp}
            >
              <div className="h-20 aspect-video overflow-hidden mb-2">
                <img
                  loading="lazy"
                  src={item.image_url}
                  alt="partner"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="font-semibold text-primary">{item.title}</h3>
            </motion.li>
          ))}
        </motion.ul>

        {/* Button */}
        {block?.other_data?.btn_1_enabled && block?.other_data?.btn_1_url && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Button
              className={`mx-auto block`}
              onClick={() =>
                handleAction(block?.other_data?.btn_1_url, {
                  serviceId: block?.serviceId,
                  serviceTitle: block?.serviceTitle,
                })
              }
            >
              {block.other_data.btn_1_text}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TechnologySection;
