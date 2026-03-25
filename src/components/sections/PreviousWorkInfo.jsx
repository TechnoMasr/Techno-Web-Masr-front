import image from "@/assets/images/pc-img.png";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import TitleAndDescription from "../common/TitleAndDescription";
import PreviousWorkInfoSkeleton from "../skeletons/PreviousWorkInfoSkeleton";
import { useTranslation } from "react-i18next";

const PreviousWorkInfo = ({ data }) => {
  const { t, i18n } = useTranslation();

  const formatedDate = new Date(data?.delivered_date).toLocaleDateString(
    i18n.language === "ar" ? "ar-EG" : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  const list = [
    {
      id: 1,
      label: t("PreviousWorkInfo.owner"),
      value: data?.owner,
    },
    {
      id: 2,
      label: t("PreviousWorkInfo.country"),
      value: data?.country,
    },
    {
      id: 3,
      label: t("PreviousWorkInfo.date"),
      value: formatedDate,
    },
  ];

  const downloadList = [
    {
      id: 1,
      icon: <FaApple />,
      link: data?.ios_url,
    },
    {
      id: 2,
      icon: <FaGooglePlay />,
      link: data?.android_url,
    },
    {
      id: 3,
      icon: <RiGlobalLine />,
      link: data?.web_url,
    },
  ];

  return (
    <section className="container sectionPadding flex flex-col-reverse md:flex-row gap-6 lg:gap-12">
      <TitleAndDescription
        title={t("PreviousWorkInfo.title")}
        description={data?.content}
        className="flex-1"
        html
      />

      <div
        className="w-full md:w-1/3 bg-white rounded-md shadow border p-4 
          flex flex-col text-center gap-2"
      >
        <div className="h-20 aspect-video overflow-hidden mb-2">
          <img
            loading="lazy"
            src={image}
            alt="project"
            className="w-full h-full object-contain"
          />
        </div>

        <h3 className="font-semibold text-primary text-lg">{data?.company}</h3>
        <p className="text-sm font-medium">{data?.description}</p>

        <hr className="my-2" />

        <ul className="flex flex-col gap-4">
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
        </ul>

        <hr className="my-2" />

        <ul className="flex items-center justify-center flex-wrap gap-4">
          {downloadList
            .filter((item) => item.link)
            .map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  target="_blank"
                  className="w-10 aspect-square flex items-center justify-center rounded-lg border 
                  text-2xl text-black hover:bg-primary hover:text-white transition-all duration-300"
                >
                  {item.icon}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default PreviousWorkInfo;
