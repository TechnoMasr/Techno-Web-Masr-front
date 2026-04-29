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
        <h1
          className={`text-2xl md:text-3xl font-semibold text-primary ${textColor}`}
        >
          {title}
        </h1>
      )}

      {description && (
        <p className={`mt-3 font-medium leading-relaxed text-lg ${textColor}`}>
          {html ? (
            <div
              className="rich_content"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          ) : (
            description
          )}
        </p>
      )}
    </motion.div>
  );
};

export default TitleAndDescription;
