import PageBanner from "@/components/sections/PageBanner";
import ServiceCard from "@/components/cards/ServiceCard";
import ServiceListSkeleton from "@/components/skeletons/ServiceListSkeleton";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/api/pagesServices";
import EmptyDataSection from "@/components/sections/EmptyDataSection";
import { useTranslation } from "react-i18next";
import SeoManager from "@/utils/SeoManager";

const Products = () => {
  const { t } = useTranslation();

  const { data: productsData, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <>
      <SeoManager
        title={productsData?.seo?.title}
        description={productsData?.seo?.description}
        keywords={productsData?.seo?.keywords}
        canonical={productsData?.seo?.canonical}
        ogImage={productsData?.seo?.ogImage}
      />

      <main>
        <PageBanner title={t("Products.title")} />

        <section className="container pagePadding">
          {isLoading ? (
            <ServiceListSkeleton />
          ) : productsData?.products?.length === 0 ? (
            <EmptyDataSection msg={t("Products.noProducts")} />
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {productsData?.products?.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  type="product"
                />
              ))}
            </ul>
          )}
        </section>
      </main>
    </>
  );
};

export default Products;
