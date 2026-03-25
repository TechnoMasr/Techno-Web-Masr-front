import SectionTitle from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/button";
import WhoWeAreSkeleton from "../skeletons/WhoWeAreSkeleton";
import useHandleAction from "@/hooks/useHandleAction";
import { motion } from "framer-motion";

const WhoWeAre = ({ block, loading }) => {
  const handleAction = useHandleAction();

  if (loading) return <WhoWeAreSkeleton />;

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-1/2 inset-s-0 -translate-y-1/2 -z-10 w-[80%] h-full bg-secondary/20 rounded-full blur-[120px]" />

      <div className="container sectionPadding">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <SectionTitle
            title={block?.top_title}
            description={block?.top_desc}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-8">
          <motion.div
            className="col-span-1 md:col-span-2 aspect-12/9 md:aspect-11/12 overflow-hidden rounded-2xl shadow"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <img
              loading="lazy"
              src={block.image_url}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="flex flex-col gap-4 lg:gap-6 md:col-span-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-xl font-semibold text-primary">
              {block.title}
            </h3>

            <p className="text-foreground font-medium text-sm">
              {block.description}
            </p>

            <ul className="grid grid-cols-2 gap-4 md:gap-8">
              {block?.block_items?.map((item) => (
                <li key={item.id} className="flex flex-col gap-2 text-primary">
                  <span className="text-lg font-bold bg-secondary/30 rounded-full w-10 h-10 flex items-center justify-center">
                    <img
                      loading="lazy"
                      src={item.image_url}
                      alt="icon"
                      className="w-5 h-5"
                    />
                  </span>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-xs text-foreground font-medium">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 mt-auto">
              <Button
                onClick={() =>
                  handleAction(block.other_data.btn_1_url, {
                    serviceId: block?.serviceId,
                    serviceTitle: block?.serviceTitle,
                  })
                }
              >
                {block.other_data.btn_1_text}
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  handleAction(block.other_data.btn_2_url, {
                    serviceId: block?.serviceId,
                    serviceTitle: block?.serviceTitle,
                  })
                }
              >
                {block.other_data.btn_2_text}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
