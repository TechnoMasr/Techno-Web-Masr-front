import SectionTitle from "@/components/common/SectionTitle";
import MainSlider from "@/components/commonSections/MainSlider";
import image from "@/assets/images/pc-img.png";

const TestimonialsSection = () => {
  const testimonials = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    image: image,
    description:
      "تكنو ويب مصر هي شركة متخصصة في الحلول الرقمية وتصميم وتطوير  شركة متخصصة في الحلول الرقمية وتصميم وتطوير ",
    user_image: image,
    user_name: "محمد بن عبد الله",
    user_job: "المدير التنفيذي لشركة فروت",
  }));

  return (
    <section>
      <div className="container sectionPadding">
        <SectionTitle title={"أراء العملاء"} />

        <MainSlider
          data={testimonials || []}
          renderItem={(service) => (
            <div
              key={service.id}
              service={service}
              className="flex gap-2 bg-gray-50 rounded-md p-2"
            >
              <div className="w-24 aspect-square p-2 rounded overflow-hidden bg-white">
                <img
                  src={service.image}
                  alt="testimonials"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1">
                <p className="text-muted-foreground font-medium text-xs">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-10 aspect-square rounded-md overflow-hidden">
                    <img
                      src={service.user_image}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-sm">
                      {service.user_name}
                    </h3>
                    <p className="text-xs">{service.user_job}</p>
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
