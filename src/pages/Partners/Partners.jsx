import PageBanner from "@/components/sections/PageBanner";
import PartnersListSkeleton from "@/components/skeletons/PartnersListSkeleton";
import EmptyDataSection from "@/components/sections/EmptyDataSection";
import { getPartners } from "@/api/pagesServices";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import SeoManager from "@/utils/SeoManager";

const Partners = () => {
  const { t } = useTranslation();

  const { data: PartnersData, isLoading } = useQuery({
    queryKey: ["Partners"],
    queryFn: getPartners,
  });

  return (
    <>
      <SeoManager
        title={PartnersData?.seo?.title}
        description={PartnersData?.seo?.description}
        keywords={PartnersData?.seo?.keywords}
        canonical={PartnersData?.seo?.canonical}
        ogImage={PartnersData?.seo?.ogImage}
      />

      <main>
        <PageBanner title={t("Partners.title")} />

        <section className="container pagePadding">
          {isLoading ? (
            <PartnersListSkeleton />
          ) : PartnersData?.clients?.length === 0 ? (
            <EmptyDataSection msg={t("Partners.noClients")} />
          ) : (
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-8">
              {PartnersData?.clients?.map((item) => (
                <li
                  key={item.id}
                  className="bg-white shadow rounded-md border w-full aspect-video
                flex flex-col items-center text-center gap-2 p-4"
                >
                  <div className="h-24 aspect-video overflow-hidden mb-2">
                    <img
                      loading="lazy"
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h3 className="font-semibold text-primary">{item.title}</h3>
                  <p className="text-xs font-medium">{item.description}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </>
  );
};

export default Partners;
