import { getContactUsPage } from "@/api/contactServices";
import SectionTitle from "@/components/common/SectionTitle";
import EmptyDataSection from "@/components/sections/EmptyDataSection";
import PageBanner from "@/components/sections/PageBanner";
import BranchesSectionSkeleton from "@/components/skeletons/BranchesSectionSkeleton";
import { useQuery } from "@tanstack/react-query";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { useNavigate, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ContactUS = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();

  const { data: contactData, isLoading } = useQuery({
    queryKey: ["contactUsPage"],
    queryFn: getContactUsPage,
  });

  const branches =
    contactData?.branches?.map((item) => ({
      id: item.id,
      slug: item.slug,
      name: item.name,
      description: item.description,
      map_embed: item.map_embed,
      info: [
        {
          id: 1,
          label: t("ContactUS.address"),
          value: item.address,
          icon: <SlLocationPin />,
        },
        {
          id: 2,
          label: t("ContactUS.phone"),
          value: item.phone,
          icon: <FiPhone />,
        },
        {
          id: 3,
          label: t("ContactUS.email"),
          value: item.email,
          icon: <MdOutlineMailOutline />,
        },
      ],
      social: [
        {
          id: 1,
          link: contactData?.socialLinks?.footer_instagram,
          icon: <FaInstagram />,
        },
        {
          id: 2,
          link: contactData?.socialLinks?.footer_linkedin,
          icon: <FaLinkedinIn />,
        },
        {
          id: 3,
          link: contactData?.socialLinks?.footer_x,
          icon: <FaXTwitter />,
        },
      ],
    })) || [];

  // Framer Motion variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main>
      <PageBanner title={t("ContactUS.title")} />

      {isLoading ? (
        <BranchesSectionSkeleton />
      ) : contactData?.branches?.length === 0 ? (
        <EmptyDataSection msg={t("ContactUS.noBranches")} />
      ) : (
        <motion.section
          className="container pagePadding"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={textVariants}>
            <SectionTitle
              title={contactData?.title}
              description={contactData?.description}
            />
          </motion.div>

          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mt-6`}
          >
            {branches?.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => navigate(`/${lang}/contact/${item.slug}`)}
                className={`flex flex-col gap-4 bg-white p-3 border shadow rounded-lg font-medium cursor-pointer w-full`}
                variants={cardVariants}
              >
                <div
                  className="rounded-lg [&>iframe]:w-full [&>iframe]:h-72 rich_content"
                  dangerouslySetInnerHTML={{ __html: item.map_embed }}
                />

                <h3 className="text-xl md:text-2xl text-primary">
                  {item.name}
                </h3>
                <p>{item.description}</p>

                <ul className="flex flex-col gap-6">
                  {item.info.map((info) => (
                    <li className="flex items-center gap-3 py-1" key={info.id}>
                      <div className="w-10 aspect-square grid place-items-center bg-gray-100 text-primary rounded-full border shadow">
                        {info.icon}
                      </div>
                      <div className="flex flex-col gap-1 flex-1">
                        <p className="text-gray-500 text-sm font-medium">
                          {info.label}
                        </p>
                        <span className="text-black text-sm">{info.value}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <ul className="flex gap-4 pt-4 border-t">
                  {item.social.map((social) => (
                    <li key={social.id}>
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 aspect-square grid place-items-center
                      bg-gray-100 text-gray-500 text-lg rounded-full border shadow"
                      >
                        {social.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}
    </main>
  );
};

export default ContactUS;
