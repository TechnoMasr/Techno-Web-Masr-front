import PageBanner from "@/components/sections/PageBanner";
import { getProductDetails } from "@/api/pagesServices";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import PreviousWorkInfoSkeleton from "@/components/skeletons/PreviousWorkInfoSkeleton";
import GallerySectionSkeleton from "@/components/skeletons/GallerySectionSkeleton";
import StartWithUsBannerSkeleton from "@/components/skeletons/StartWithUsBannerSkeleton";
import TestimonialsSectionSkeleton from "@/components/skeletons/TestimonialsSectionSkeleton";
import BlocksRender from "@/components/sections/BlocksRender";

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

  if (isLoading) return  <>
    <PreviousWorkInfoSkeleton />
  <GallerySectionSkeleton />
  <StartWithUsBannerSkeleton />
  <TestimonialsSectionSkeleton />
  </>;
  return <main>  {blocks.length > 0 && <BlocksRender blocks={blocks}/>  } </main>;





};

export default ProductsDetails;
