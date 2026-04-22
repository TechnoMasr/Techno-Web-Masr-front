import ServiceCard from "@/components/cards/ServiceCard";
import SectionTitle from "@/components/common/SectionTitle";
import MainSlider from "@/components/sections/MainSlider";
import ServicesSectionSkeleton from "../skeletons/ServicesSectionSkeleton";
import { getServicesSlider } from "@/api/mainServices";
import { useQuery } from "@tanstack/react-query";

const ServicesSection = ({ block, loading }) => {
  const { data: servicesData, isLoading } = useQuery({
    queryKey: ["servicesSlider"],
    queryFn: getServicesSlider,
    enabled: !block?.block_items?.length,
  });

  if (loading || isLoading) return <ServicesSectionSkeleton />;

  if (!block?.block_items?.length) return null;

  const services =
    block?.block_items?.length > 0 ? block.block_items : servicesData || [];

  return (
    <section>
      <div className="container sectionPadding">
        <SectionTitle
          title={block?.title}
          description={block?.description}
          link={{
            href: block?.other_data?.btn_1_url || "/services",
            text: block?.other_data?.btn_1_text || "عرض جميع الخدمات",
          }}
        />

        <MainSlider
          data={services}
          renderItem={(service) => (
            <ServiceCard key={service.id} service={service} />
          )}
        />
      </div>
    </section>
  );
};
export default ServicesSection;
