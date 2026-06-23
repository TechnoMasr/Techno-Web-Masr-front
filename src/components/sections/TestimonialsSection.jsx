import SectionTitle from "@/components/common/SectionTitle";
import MainSlider from "./MainSlider";
import TestimonialsSectionSkeleton from "../skeletons/TestimonialsSectionSkeleton";
import { useQuery } from "@tanstack/react-query";
import { getTestimonials } from "@/api/pagesServices";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const TestimonialsSection = ({ block }) => {
  const { t } = useTranslation();
  const { data: testimonialsData, isLoading } = useQuery({
    queryKey: ["testimonialsData"],
    queryFn: () => getTestimonials(),
  });

  if (isLoading) {
    return <TestimonialsSectionSkeleton />;
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section>
      <div className="container sectionPadding">
        <SectionTitle title={block.title || t("TestimonialsSection.defaultTitle")} />

        <MainSlider
          data={testimonialsData || []}
          renderItem={(testimonial) => (
            <motion.div
              key={testimonial.id}
              className="flex gap-2 bg-gray-50 rounded-md p-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {testimonial.company_logo && (
                <div className="w-24 aspect-square p-2 rounded overflow-hidden bg-white">
                  <img
                    loading="lazy"
                    src={testimonial.company_logo}
                    alt="testimonials"
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              <div className="flex-1 flex flex-col justify-between gap-4">
                <p className="font-medium text-sm">{testimonial.content}</p>

                <div className="flex items-center gap-2">
                  {testimonial.image_url && (
                    <div className="w-12 aspect-square rounded-sm overflow-hidden">
                      <img
                        loading="lazy"
                        src={testimonial.image_url}
                        alt="user"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 text-black">
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-sm">{testimonial.job}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
