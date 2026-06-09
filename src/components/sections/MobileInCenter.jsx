import { motion } from "framer-motion";
import MobileInCenterSkeleton from "../skeletons/MobileInCenterSkeleton";

const MobileInCenter = ({ block, loading }) => {
  const leftItems = block?.block_items?.filter((_, i) => i % 2 === 0);
  const rightItems = block?.block_items?.filter((_, i) => i % 2 === 1);

  if (loading) return <MobileInCenterSkeleton />;

  // 🔥 Variants
  const phoneVariant = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  const leftContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const rightContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const leftItem = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  const rightItem = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  const mobileItem = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="sectionPadding relative" dir="rtl">
      {/* 🔥 Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-1/2 inset-s-0 -translate-y-1/2 -z-10 w-[80%] h-full bg-secondary/20 rounded-full blur-[120px]"
      />

      <div className="container">
        {/* 🔥 Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          {/* Left */}
          <motion.ul
            variants={leftContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            {leftItems.map((item) => (
              <motion.li
                key={item.id}
                variants={leftItem}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center gap-2 text-primary"
              >
                {item.image_url && (
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring" }}
                    viewport={{ once: true }}
                    className="text-lg font-bold bg-secondary/30 rounded-full w-22 h-22 flex items-center justify-center"
                  >
                    <img
                      loading="lazy"
                      src={item.image_url}
                      alt="icon"
                      className="w-12 h-12"
                    />
                  </motion.span>
                )}

                <h3 className="font-semibold lg:text-xl">{item.title}</h3>
                <p className="text-foreground font-medium text-sm max-w-70 leading-tight">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* 🔥 Phone */}
          {block?.image_url && (
            <motion.div
              variants={phoneVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex justify-center w-full"
            >
              <motion.img
                loading="lazy"
                src={block?.image_url}
                alt="phone mockup"
                className="w-full h-full max-w-[400px] object-contain drop-shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          )}

          {/* Right */}
          <motion.ul
            variants={rightContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            {rightItems.map((item) => (
              <motion.li
                key={item.id}
                variants={leftItem}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center gap-2 text-primary"
              >
                {item.image_url && (
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring" }}
                    viewport={{ once: true }}
                    className="text-lg font-bold bg-secondary/30 rounded-full w-22 h-22 flex items-center justify-center"
                  >
                    <img
                      loading="lazy"
                      src={item.image_url}
                      alt="icon"
                      className="w-12 h-12"
                    />
                  </motion.span>
                )}

                <h3 className="font-semibold lg:text-xl">{item.title}</h3>
                <p className="text-foreground font-medium text-sm max-w-70 leading-tight">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* 🔥 Mobile Layout */}
        <div className="flex flex-col items-center gap-4 lg:hidden">
          {/* Phone */}
          {/* <motion.img
            variants={phoneVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            loading="lazy"
            src={block?.image_url}
            alt="phone mockup"
            className="w-50 object-contain drop-shadow-2xl"
          /> */}

          {/* Items */}
          <motion.ul
            variants={leftContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6 w-full"
          >
            {block?.block_items?.map((item) => (
              <motion.li
                key={item.id}
                variants={leftItem}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center gap-2 text-primary"
              >
                {item.image_url && (
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring" }}
                    viewport={{ once: true }}
                    className="text-lg font-bold bg-secondary/30 rounded-full w-22 h-22 flex items-center justify-center"
                  >
                    <img
                      loading="lazy"
                      src={item.image_url}
                      alt="icon"
                      className="w-12 h-12"
                    />
                  </motion.span>
                )}

                <h3 className="font-semibold lg:text-xl">{item.title}</h3>
                <p className="text-foreground font-medium text-sm max-w-70 leading-tight">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default MobileInCenter;
