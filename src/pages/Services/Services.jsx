import PageBanner from "@/components/sections/PageBanner";
import ServiceCard from "@/components/cards/ServiceCard";
import ServiceListSkeleton from "@/components/skeletons/ServiceListSkeleton";
import { getServices } from "@/api/pagesServices";
import { useQuery } from "@tanstack/react-query";
import EmptyDataSection from "@/components/sections/EmptyDataSection";
import { useTranslation } from "react-i18next";
import SeoManager from "@/utils/SeoManager";

const Services = () => {
  const { t } = useTranslation();

  const { data: servicesData, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  return (
    <>
      <SeoManager
        title={servicesData?.seo?.title}
        description={servicesData?.seo?.description}
        keywords={servicesData?.seo?.keywords}
        canonical={servicesData?.seo?.canonical}
        ogImage={servicesData?.seo?.ogImage}
      />

      <main>
        <PageBanner title={t("Services.title")} />

        <section className="container pagePadding">
          {isLoading ? (
            <ServiceListSkeleton />
          ) : servicesData?.services?.length === 0 ? (
            <EmptyDataSection msg={t("Services.noServices")} />
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {servicesData?.services?.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </ul>
          )}
        </section>
      </main>
    </>
  );
};

export default Services;
