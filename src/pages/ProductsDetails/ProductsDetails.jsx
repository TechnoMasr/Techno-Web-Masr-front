import { getProductDetails } from "@/api/pagesServices";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import BlocksRender from "@/components/sections/BlocksRender";
import BlocksRenderSkeleton from "@/components/skeletons/BlocksRenderSkeleton";
import SeoManager from "@/utils/SeoManager";
import Header from "@/components/layout/Header/Header";
import NotFound from "../NotFound/NotFound";
import BlogsSection from "@/components/sections/BlogsSection";

const ProductsDetails = () => {
  const { slug } = useParams();

  const { data: productDetailsData, isLoading } = useQuery({
    queryKey: ["productDetails", slug],
    queryFn: () => getProductDetails(slug),
  });

  if (isLoading) return <BlocksRenderSkeleton />;

  // لو المنتج غير موجود
  if (
    !productDetailsData ||
    productDetailsData?.length === 0 ||
    !productDetailsData?.product
  ) {
    return <NotFound />;
  }

  const product = productDetailsData?.product;
  const blocks = product?.blocks ?? [];
  const blogs = productDetailsData?.blogs || [];
  const seo = productDetailsData?.seo;

  return (
    <>
      <SeoManager
        title={seo?.meta_title || product?.name}
        description={seo?.meta_description || product?.description}
        keywords={seo?.keywords}
        canonical={seo?.canonical_url}
        ogImage={seo?.og_image_url}
        schemaMarkup={product?.schema_markup}
      />

      <main>
        <Header alwaysScrolled />
        <BlocksRender
          blocks={blocks}
          serviceId={product?.id}
          serviceTitle={product?.name}
        />

        {blogs.length > 0 && <BlogsSection blogs={blogs} />}
      </main>
    </>
  );
};

export default ProductsDetails;
