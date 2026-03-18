import PageBanner from "@/components/sections/PageBanner";
import ServiceCard from "@/components/cards/ServiceCard";
import ServiceListSkeleton from "@/components/skeletons/ServiceListSkeleton";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/api/pagesServices";
import EmptyDataSection from "@/components/sections/EmptyDataSection";

const Products = () => {
  const { data: productsData, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <main>
      <PageBanner title={"منتجاتنا"} />

      <section className="container pagePadding">
        {isLoading ? (
          <ServiceListSkeleton />
        ) : productsData?.products?.length === 0 ? (
          <EmptyDataSection msg={`لا يوجد منتجات حاليا`} />
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {productsData?.products?.map((service) => (
              <ServiceCard key={service.id} service={service} type="product" />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};

export default Products;
