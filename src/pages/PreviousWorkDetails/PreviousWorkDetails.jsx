import PageBanner from "@/components/sections/PageBanner";
import { getPortfolioDetails } from "@/api/pagesServices";


import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

import BlocksRender from "@/components/sections/BlocksRender";
import { useState } from "react";
import { useEffect } from "react";
import PreviousWorkInfoSkeleton from "@/components/skeletons/PreviousWorkInfoSkeleton";
import TestimonialsSectionSkeleton from "@/components/skeletons/TestimonialsSectionSkeleton";
import StartWithUsBannerSkeleton from "@/components/skeletons/StartWithUsBannerSkeleton";
import GallerySectionSkeleton from "@/components/skeletons/GallerySectionSkeleton";




const PreviousWorkDetails = () => {

  const { slug } = useParams();

  const { data: portfolioDetailsData, isLoading } = useQuery({
    queryKey: ["portfolioDetails", slug],
    queryFn: () => getPortfolioDetails(slug),
  });

  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    if (portfolioDetailsData?.portfolio?.blocks) {
      setBlocks(portfolioDetailsData?.portfolio?.blocks);
    }
  }, [portfolioDetailsData]);

  if (isLoading) return  <>
    <PreviousWorkInfoSkeleton />
  <GallerySectionSkeleton />
  <StartWithUsBannerSkeleton />
  <TestimonialsSectionSkeleton />
  </>;
  return <main>  {blocks.length > 0 && <BlocksRender blocks={blocks}/>  } </main>;


};

export default PreviousWorkDetails;
