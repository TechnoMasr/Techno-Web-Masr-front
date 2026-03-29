import image from "@/assets/images/pc-img.png";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import TitleAndDescription from "../common/TitleAndDescription";
import { motion } from "framer-motion";
import PreviousWorkInfoSkeleton from "../skeletons/PreviousWorkInfoSkeleton";
import { useTranslation } from "react-i18next";

const PreviousWorkInfo = ({ data, loading }) => {
  const { t, i18n } = useTranslation();

  if (loading) return <PreviousWorkInfoSkeleton />;

  const formatedDate = new Date(data?.delivered_date).toLocaleDateString(
    i18n.language === "ar" ? "ar-EG" : "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  );

  const list = [
    { id: 1, label: t("PreviousWorkInfo.owner"), value: data?.owner },
    { id: 2, label: t("PreviousWorkInfo.country"), value: data?.country },
    { id: 3, label: t("PreviousWorkInfo.date"), value: formatedDate },
  ];

  const downloadList = [
    { id: 1, icon: <FaApple />, link: data?.ios_url },
    { id: 2, icon: <FaGooglePlay />, link: data?.android_url },
    { id: 3, icon: <RiGlobalLine />, link: data?.web_url },
  ];

  // 🔥 Variants
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="container sectionPadding flex flex-col-reverse lg:flex-row gap-6 lg:gap-12"
    >
      <motion.div variants={fadeUp} className="flex-1">
        <TitleAndDescription
          title={t("PreviousWorkInfo.title")}
          description={data?.content}
          html
        />
      </motion.div>

      <motion.div
        variants={cardVariant}
        className="w-full max-w-sm mx-auto lg:max-w-xs bg-white rounded-md shadow border p-4 flex flex-col text-center gap-2"
      >
        <div className="h-28 w-full overflow-hidden mb-2 border border-transparent rounded-2xl hover:border-primary duration-300 py-2">
          <img
            loading="lazy"
            src={image}
            alt="project"
            className="w-full h-full object-contain"
          />
        </div>

        <motion.h3
          variants={fadeUp}
          className="font-semibold text-primary text-lg"
        >
          {data?.company}
        </motion.h3>
        <motion.p variants={fadeUp} className="text-sm font-medium">
          {data?.description}
        </motion.p>

        <hr className="my-2" />

        <motion.ul variants={fadeUp} className="flex flex-col gap-4">
          {list
            .filter((item) => item.value)
            .map((item) => (
              <li
                key={item.id}
                className="w-full flex items-center justify-between gap-2 text-xs font-bold"
              >
                <p className="text-gray-400">{item.label}</p>
                <span className="text-primary">{item.value}</span>
              </li>
            ))}
        </motion.ul>

        <hr className="my-2" />

        <motion.ul
          variants={fadeUp}
          className="flex items-center justify-center flex-wrap gap-4"
        >
          {downloadList
            .filter((item) => item.link)
            .map((item) => (
              <motion.li key={item.id} whileHover={{ scale: 1.1 }}>
                <a
                  href={item.link}
                  target="_blank"
                  className="w-10 aspect-square flex items-center justify-center rounded-lg border text-2xl text-black hover:bg-primary hover:text-white transition-all duration-300"
                >
                  {item.icon}
                </a>
              </motion.li>
            ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
};

export default PreviousWorkInfo;
