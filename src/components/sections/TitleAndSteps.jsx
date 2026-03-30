import useHandleAction from "@/hooks/useHandleAction";
import TitleAndDescription from "../common/TitleAndDescription";
import TitleAndStepsSkeleton from "../skeletons/TitleAndStepsSkeleton";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const TitleAndSteps = ({ block, loading }) => {
  const handleAction = useHandleAction();

  if (loading) return <TitleAndStepsSkeleton />;

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="sectionPadding">
      <div className="container space-y-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <TitleAndDescription
            className="max-w-3xl"
            title={block.title}
            description={block.description}
          />
        </motion.div>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {block.block_items.map((step, index) => (
            <motion.li
              key={step.id}
              className="flex flex-col items-center text-center gap-2 border rounded-md text-primary p-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-lg font-bold border-2 border-secondary rounded-full w-10 h-10 flex items-center justify-center">
                {index + 1}
              </span>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="text-foreground font-medium text-sm">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ul>

        {block?.other_data?.btn_1_enabled && block?.other_data?.btn_1_url && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Button
              className="mx-auto block mt-4"
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

export default TitleAndSteps;
