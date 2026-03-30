import { Link } from "react-router";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const SectionTitle = ({ title, description, link, margin = true }) => {
  // 🔥 Variants
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.hgroup
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`flex flex-col items-center justify-center text-center gap-4 px-4 ${margin ? "mb-6 lg:mb-12" : ""}`}
    >
      {title && (
        <>
          <motion.h2
            variants={fadeUp}
            className="text-xl lg:text-3xl capitalize font-semibold text-primary"
          >
            {title}
          </motion.h2>

          <motion.span
            variants={fadeUp}
            className="w-32 lg:w-50 h-0.5 bg-primary rounded-full"
          />
        </>
      )}

      {description && (
        <motion.p variants={fadeUp} className="max-w-5xl font-medium text-lg">
          {description}
        </motion.p>
      )}

      {link?.href && link?.text && (
        <motion.div variants={fadeUp}>
          <Link to={link.href}>
            <Button variant="outline">{link.text}</Button>
          </Link>
        </motion.div>
      )}
    </motion.hgroup>
  );
};

export default SectionTitle;
