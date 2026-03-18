import ServiceCard from "@/components/cards/ServiceCard";
import SectionTitle from "@/components/common/SectionTitle";
import MainSlider from "@/components/sections/MainSlider";
import image from "@/assets/images/bg-img.png";
import ServicesSectionSkeleton from "../skeletons/ServicesSectionSkeleton";

const ServicesSection = () => {
  const services = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    image: image,
    title: "تصميم الابلكيشن",
    description:
      "تكنو ويب مصر هي شركة متخصصة في الحلول الرقمية وتصميم وتطوير  شركة متخصصة في الحلول الرقمية وتصميم وتطوير ",
  }));

  // const loading = true;

  // if (loading) return <ServicesSectionSkeleton />;

  return (
    <section>
      <div className="container sectionPadding">
        <SectionTitle
          title={"خدمات تكنو ويب مصر"}
          description={
            "تكنو ويب مصر هي شركة متخصصة في الحلول الرقمية وتصميم وتطوير المواقع الإلكترونية،"
          }
          link={{
            href: "/services",
            text: "عرض جميع الخدمات",
          }}
        />

        <MainSlider
          data={services || []}
          renderItem={(service) => (
            <ServiceCard key={service.id} service={service} />
          )}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
