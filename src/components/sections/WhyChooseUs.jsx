import WhyChooseUsSkeleton from "../skeletons/WhyChooseUsSkeleton";
import { motion } from "framer-motion";
import Union from "@/assets/icons/Union.png";

const WhyChooseUs = ({ block, loading }) => {
  if (loading) return <WhyChooseUsSkeleton />;

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-1/2 inset-s-0 -translate-y-1/2 -z-10 w-[80%] h-full bg-secondary/20 rounded-full blur-[120px]" />

      <img
        loading="lazy"
        src={Union}
        alt="Decorative background"
        className="absolute top-0 inset-e-10 opacity-60 w-26 -z-10"
      />

      <img
        loading="lazy"
        src={Union}
        alt="Decorative background"
        className="absolute bottom-0 inset-s-10 opacity-60 w-26 -z-10"
      />

      <div className="container sectionPadding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-16 place-items-center">
          <motion.div
            className="flex flex-col gap-4 lg:gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-2xl font-semibold text-black">
              {block.title}
            </h3>

            <p className="text-foreground font-medium">
              {block.description}
            </p>

            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.1, // كل عنصر يظهر بعد 0.1 ثانية من اللي قبله
                  },
                },
              }}
            >
              {block.block_items.map((item) => (
                <motion.li
                  key={item.id}
                  className="flex flex-col gap-2 p-3 shadow rounded-md bg-primary text-white"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    loading="lazy"
                    src={item.image_url}
                    alt={item.title}
                    className="w-8 h-8"
                  />
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-xs">
                    {item.description}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="h-100 overflow-hidden hidden md:block"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <img
              loading="lazy"
              src={block?.image_url}
              alt={block.title || "Why choose us image"}
              className="w-full h-full object-cover drop-shadow-xl rounded-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
