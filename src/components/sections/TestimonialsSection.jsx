import SectionTitle from "@/components/common/SectionTitle";
import MainSlider from "./MainSlider";
import TestimonialsSectionSkeleton from "../skeletons/TestimonialsSectionSkeleton";
import { useQuery } from "@tanstack/react-query";
import { getTestimonials } from "@/api/pagesServices";

const TestimonialsSection = ({ block }) => {
  const { data: testimonialsData, isLoading } = useQuery({
    queryKey: ["testimonialsData"],
    queryFn: () => getTestimonials(),
  });

  if (isLoading) {
    return <TestimonialsSectionSkeleton />;
  }
  return (
    <section>
      <div className="container sectionPadding">
        <SectionTitle title={block.title || "أراء العملاء"} />
        <MainSlider
          data={testimonialsData || []}
          renderItem={(testimonial) => (
            <div
              key={testimonial.id}
              // service={service}
              className="flex gap-2 bg-gray-50 rounded-md p-2"
            >
              <div className="w-24 aspect-square p-2 rounded overflow-hidden bg-white">
                <img
                  loading="lazy"
                  src={testimonial.company_logo}
                  alt="testimonials"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between gap-4">
                <p className="font-medium text-sm">{testimonial.content}</p>

                <div className="flex items-center gap-2">
                  <div className="w-10 aspect-square rounded-md overflow-hidden">
                    <img
                      loading="lazy"
                      src={testimonial.image_url}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-black">
                    <h3 className="font-semibold text-sm">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs">{testimonial.job}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
};
export default TestimonialsSection;
