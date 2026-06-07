import { getProductDetails } from "@/api/pagesServices";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import BlocksRender from "@/components/sections/BlocksRender";
import BlocksRenderSkeleton from "@/components/skeletons/BlocksRenderSkeleton";
import SeoManager from "@/utils/SeoManager";
import Header from "@/components/layout/Header/Header";

const ProductsDetails = () => {
  const { slug } = useParams();

  const { data: productDetailsData, isLoading } = useQuery({
    queryKey: ["productDetails", slug],
    queryFn: () => getProductDetails(slug),
  });

  if (isLoading) return <BlocksRenderSkeleton />;

  const product = productDetailsData?.product;
  const blocks = product?.blocks ?? [];
  const seo = productDetailsData?.seo;

  const hasNoBlocks = !blocks.length;

  return (
    <>
      <SeoManager
        title={seo?.meta_title}
        description={seo?.meta_description}
        keywords={seo?.keywords}
        canonical={seo?.canonical_url}
        ogImage={seo?.og_image_url}
      />

      <main>
        {hasNoBlocks ? (
          <Header alwaysScrolled />
        ) : (
          <BlocksRender
            blocks={blocks}
            serviceId={product?.id}
            serviceTitle={product?.name}
          />
        )}
      </main>
    </>
  );
};

export default ProductsDetails;
