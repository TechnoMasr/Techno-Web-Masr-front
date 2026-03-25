import { getProductDetails } from "@/api/pagesServices";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import BlocksRender from "@/components/sections/BlocksRender";
import BlocksRenderSkeleton from "@/components/skeletons/BlocksRenderSkeleton";
import SeoManager from "@/utils/SeoManager";

const ProductsDetails = () => {
  const { slug } = useParams();

  const { data: productDetailsData, isLoading } = useQuery({
    queryKey: ["productDetails", slug],
    queryFn: () => getProductDetails(slug),
  });

  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    if (productDetailsData?.product?.blocks) {
      setBlocks(productDetailsData?.product?.blocks);
    }
  }, [productDetailsData]);

  if (isLoading) return <BlocksRenderSkeleton />;

  const seo = productDetailsData?.seo;

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
        {blocks.length > 0 && (
          <BlocksRender
            blocks={blocks}
            serviceId={productDetailsData?.product?.id}
            serviceTitle={productDetailsData?.product?.name}
          />
        )}
      </main>
    </>
  );
};

export default ProductsDetails;
