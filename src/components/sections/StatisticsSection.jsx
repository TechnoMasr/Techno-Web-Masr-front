import SectionTitle from "@/components/common/SectionTitle";
import image from "@/assets/images/bg-img.png";
import StatisticsSkeleton from "../skeletons/StatisticsSkeleton";
import { motion } from "framer-motion";

const Statistics = ({ block, loading }) => {
  if (loading) return <StatisticsSkeleton />;

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
    <section
      className="bg-center bg-cover relative"
      style={{ backgroundImage: `url(${block.bg_image_url || image})` }}
    >
      <div className="absolute inset-0 bg-gray-100/90" />

      <div className="container sectionPadding relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionTitle title={block?.title} description={block?.description} />
        </motion.div>

        <motion.ul
          className="flex flex-wrap justify-center gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {block?.block_items.map((item) => {
            const [title, desc] = item.description?.split("\n") || [];

            return (
              <motion.li
                key={item.id}
                className="w-40 md:w-46 flex flex-col gap-2 p-3 shadow rounded-md bg-white text-primary 
                  hover:bg-primary hover:text-white transition-all duration-300 group"
                variants={fadeUp}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-4xl font-semibold">{item.title}</span>

                  <span
                    className="text-2xl bg-secondary/20 w-10 h-10 flex items-center justify-center rounded-full
                    group-hover:bg-secondary transition-colors duration-300"
                  >
                    <img
                      loading="lazy"
                      src={item.image_url}
                      alt=""
                      className="w-6 h-6"
                    />
                  </span>
                </div>

                <h2 className="font-semibold text-sm">{title}</h2>
                <p className="text-xs font-medium opacity-70">{desc}</p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
};

export default Statistics;
