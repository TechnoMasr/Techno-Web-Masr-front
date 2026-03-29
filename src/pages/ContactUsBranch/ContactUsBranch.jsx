import PageBanner from "@/components/sections/PageBanner";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import ContactForm from "./sections/ContactForm";
import { useQuery } from "@tanstack/react-query";
import { getBranchDetails } from "@/api/contactServices";
import { useParams } from "react-router";
import BranchSkeleton from "@/components/skeletons/BranchSkeleton";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ContactUsBranch = () => {
  const { t } = useTranslation();
  const { slug } = useParams();

  const { data: branchData, isLoading } = useQuery({
    queryKey: ["branchDetails", slug],
    queryFn: () => getBranchDetails(slug),
  });

  const item = {
    id: branchData?.id,
    slug: branchData?.slug,
    name: branchData?.name,
    description: branchData?.description,
    map_embed: branchData?.map_embed,
    info: [
      {
        id: 1,
        label: t("ContactUS.address"),
        value: branchData?.address,
        icon: <SlLocationPin />,
      },
      {
        id: 2,
        label: t("ContactUS.phone"),
        value: branchData?.phone,
        icon: <FiPhone />,
      },
      {
        id: 3,
        label: t("ContactUS.email"),
        value: branchData?.email,
        icon: <MdOutlineMailOutline />,
      },
    ],
  };

  // Framer Motion Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const infoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <main>
      <PageBanner title={item.name} />

      <section className="container pagePadding space-y-4 md:space-y-8">
        {isLoading ? (
          <BranchSkeleton />
        ) : !branchData ? null : (
          <motion.div
            className="flex flex-col md:flex-row-reverse gap-2 md:gap-8 bg-white p-3 border rounded-lg font-medium"
            key={item.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <div
              className="rounded-lg [&>iframe]:w-full md:w-1/2 [&>iframe]:h-72 rich_content"
              dangerouslySetInnerHTML={{ __html: item.map_embed }}
            />

            <motion.div
              className="flex flex-col gap-2 md:w-1/2"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
              <motion.h3
                className="text-xl md:text-2xl text-primary"
                variants={infoVariants}
              >
                {item.name}
              </motion.h3>
              <motion.p className="" variants={infoVariants}>
                {item.description}
              </motion.p>

              <ul className="flex flex-col gap-4">
                {item.info.map((info) => (
                  <motion.li
                    className="flex items-center gap-3 py-1"
                    key={info.id}
                    variants={infoVariants}
                  >
                    <div className="w-10 aspect-square grid place-items-center bg-gray-100 text-primary rounded-full border shadow">
                      {info.icon}
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                      <p className="text-gray-500 text-sm">{info.label}</p>
                      <span className="text-black text-sm">{info.value}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}

        <ContactForm />
      </section>
    </main>
  );
};

export default ContactUsBranch;
