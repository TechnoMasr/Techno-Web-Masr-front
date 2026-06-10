import { motion } from "framer-motion";
import useHandleAction from "@/hooks/useHandleAction";
import TitleAndDescription from "../common/TitleAndDescription";
import { Button } from "../ui/button";

const MobileAndSteps = ({ block }) => {
  const handleAction = useHandleAction();

  if (!block?.image_url && !block?.block_items?.length) return null;

  // 🔥 Variants
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const stepsContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const stepItem = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className={`sectionPadding relative`}>
      {/* 🔥 Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-1/2 inset-s-0 -translate-y-1/2 -z-10 w-[80%] h-full bg-secondary/20 rounded-full blur-[120px]"
      />

      <div className="container grid grid-cols-1 lg:grid-cols-6 gap-8 relative z-10">
        {/* 🔥 Content */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`space-y-4 lg:space-y-8 ${
            block?.image_url ? "md:col-span-4" : "md:col-span-6"
          }`}
        >
          <TitleAndDescription
            title={block.title}
            description={block.description}
          />

          {/* 🔥 Steps */}
          <motion.ul
            variants={stepsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {block.block_items.map((step, index) => (
              <motion.li
                key={step.id}
                variants={stepItem}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex flex-col items-center text-center gap-2 border rounded-md text-primary p-3 transition"
              >
                {/* 🔥 Step Number */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold border-2 border-secondary rounded-full w-14 h-14 flex items-center justify-center"
                >
                  {index + 1}
                </motion.span>

                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-foreground font-medium text-[13px]">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* 🔥 Button */}
          {block?.other_data?.btn_1_enabled && block?.other_data?.btn_1_url && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={() =>
                  handleAction(block?.other_data?.btn_1_url, {
                    serviceId: block?.serviceId,
                    serviceTitle: block?.serviceTitle,
                  })
                }
              >
                {block?.other_data?.btn_1_text}
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* 🔥 Image */}
        {block?.image_url && (
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full h-150 hidden lg:block lg:col-span-2"
          >
            <motion.img
              loading="lazy"
              src={block.image_url}
              alt="image"
              className="w-full h-full object-contain"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MobileAndSteps;
