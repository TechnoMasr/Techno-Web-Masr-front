import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link, useParams } from "react-router";
import { useTranslation } from "react-i18next";

const BlogCard = ({ blog }) => {
  const { lang } = useParams();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col h-full gap-3 border p-2 rounded-lg bg-white hover:shadow-lg transition-shadow duration-300 shadow-black/30">
      <div className="w-full lg:aspect-5/3 overflow-hidden rounded-md">
        {blog?.image_url && (
          <img
            loading="lazy"
            src={blog?.image_url}
            alt={blog?.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <h3 className="font-semibold text-lg text-primary">{blog?.title}</h3>

      <p className="text-xs font-medium line-clamp-3">
        {blog?.short_description}
      </p>

      <Link
        to={`/${lang}/blog/${blog?.slug}`}
        className="flex items-center gap-2 group text-gray-400 font-medium mt-auto"
      >
        {t("read_more")}
        <HiArrowNarrowLeft className="ltr:rotate-180 group-hover:-translate-x-1 ltr:group-hover:translate-x-1 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default BlogCard;
