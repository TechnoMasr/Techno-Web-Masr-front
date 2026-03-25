import { motion } from "framer-motion";

const TitleAndDescription = ({
  title,
  description,
  className = "",
  textColor = "",
  html = false,
}) => {
  // 🔥 Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`mb-4 ${className}`}
    >
      {title && (
        <h1 className={`text-2xl font-semibold text-primary ${textColor}`}>
          {title}
        </h1>
      )}

      {description && (
        <p className={`mt-2 font-medium leading-relaxed ${textColor}`}>
          {html ? (
            <div dangerouslySetInnerHTML={{ __html: description }} />
          ) : (
            description
          )}
        </p>
      )}
    </motion.div>
  );
};

export default TitleAndDescription;
