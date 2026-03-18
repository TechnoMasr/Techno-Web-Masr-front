import PageBanner from "@/components/sections/PageBanner";
import { getProductDetails } from "@/api/pagesServices";
import { useQuery } from "@tanstack/react-query";

const ProductsDetails = () => {
  const { data: productDetailsData, isLoading } = useQuery({
    queryKey: ["productDetails"],
    queryFn: getProductDetails,
  });

  return (
    <main>
      <PageBanner title={"منتجاتنا"} />
    </main>
  );
};

export default ProductsDetails;
