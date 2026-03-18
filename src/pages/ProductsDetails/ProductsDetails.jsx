import PageBanner from "@/components/sections/PageBanner";
import { getProductDetails } from "@/api/pagesServices";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

const ProductsDetails = () => {
  const { slug } = useParams();

  const { data: productDetailsData, isLoading } = useQuery({
    queryKey: ["productDetails", slug],
    queryFn: () => getProductDetails(slug),
  });

  return (
    <main>
      <PageBanner title={"منتجاتنا"} />
    </main>
  );
};

export default ProductsDetails;
