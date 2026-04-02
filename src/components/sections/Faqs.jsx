import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import FaqsSkeleton from "../skeletons/FaqsSkeleton";
import { getFaq } from "@/api/mainServices";
import { useQuery } from "@tanstack/react-query";

const Faqs = ({ block, loading, imageRight, callApi = false }) => {
  // const { data: faqsData, isLoading } = useQuery({
  //   queryKey: ["faqs" + block?.id],
  //   queryFn: getFaq,
  //   enabled: callApi || !block?.block_items?.length,
  // });

  if (loading) return <FaqsSkeleton />;
  // if (loading || isLoading) return <FaqsSkeleton />;

  const faqs = block.block_items;
  // const faqs = faqsData?.length > 0 ? faqsData || [] : block.block_items;

  if (!block?.image_url && !faqs?.length) return null;

  // 🔥 Variants
  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: imageRight ? -50 : 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-center bg-cover relative"
      style={{ backgroundImage: `url(${block.bg_image_url})` }}
    >
      {/* <div className="absolute inset-0 bg-gray-100/40" /> */}

      <div className="container sectionPadding relative z-10">
        {/* 🔥 Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <SectionTitle title={block.title} description={block.description} />
        </motion.div>

        <div
          className={`flex items-start gap-4 lg:gap-8 ${
            imageRight && block?.image_url ? "flex-row-reverse" : ""
          }`}
        >
          {/* 🔥 Accordion */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`flex-1 ${!block?.image_url ? "w-full" : ""}`}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs?.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <AccordionItem
                    value={`item-${item.id}`}
                    className="bg-gray-200 text-black rounded-lg transition hover:shadow-md"
                  >
                    <AccordionTrigger className="p-4 font-medium text-lg cursor-pointer">
                      {item.title || item.question}
                    </AccordionTrigger>

                    <AccordionContent className="px-4 font-medium">
                      {item.description || item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* 🔥 Image Animation */}
          {block?.image_url && (
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-2/5 aspect-4/3 hidden lg:block rounded-2xl shadow overflow-hidden"
            >
              <img
                loading="lazy"
                src={block.image_url}
                alt="faq"
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Faqs;
