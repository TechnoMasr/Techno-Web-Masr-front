import PageBanner from "@/components/sections/PageBanner";
import image from "@/assets/images/bg-img.png";
import ServiceCard from "@/components/cards/ServiceCard";
import ServiceListSkeleton from "@/components/skeletons/ServiceListSkeleton";
import { getServices } from "@/api/pagesServices";
import { useQuery } from "@tanstack/react-query";

const Services = () => {
  const { data: servicesData, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  return (
    <main>
      <PageBanner title={"خدماتنا"} />

      <section className="container pagePadding">
        {isLoading ? (
          <ServiceListSkeleton />
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {servicesData?.services?.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};

export default Services;
