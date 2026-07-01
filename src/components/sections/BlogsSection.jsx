import { useTranslation } from "react-i18next";
import TitleAndDescription from "../common/TitleAndDescription";
import { motion } from "framer-motion";
import BlogCard from "../cards/BlogCard";

const BlogsSection = ({ blogs }) => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <section className="sectionPadding">
      <div className="container space-y-8">
        <TitleAndDescription
          className="max-w-3xl"
          title={t("BlogsSection.title")}
        />

        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogs?.map((blog) => (
            <motion.li key={blog.id} variants={cardVariants}>
              <BlogCard blog={blog} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default BlogsSection;
