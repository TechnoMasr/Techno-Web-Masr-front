import { getPortfolioDetails } from "@/api/pagesServices";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

import BlocksRender from "@/components/sections/BlocksRender";
import { useState } from "react";
import { useEffect } from "react";
import BlocksRenderSkeleton from "@/components/skeletons/BlocksRenderSkeleton";
import SeoManager from "@/utils/SeoManager";
import PreviousWorkInfo from "@/components/sections/PreviousWorkInfo";
import PageBanner from "@/components/sections/PageBanner";

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

  if (isLoading) return <BlocksRenderSkeleton />;

  return (
    <>
      <SeoManager
        title={portfolioDetailsData?.seo?.title}
        description={portfolioDetailsData?.seo?.description}
        keywords={portfolioDetailsData?.seo?.keywords}
        canonical={portfolioDetailsData?.seo?.canonical}
        ogImage={portfolioDetailsData?.seo?.ogImage}
      />

      <main>
        <PageBanner title={portfolioDetailsData?.portfolio?.name} />
        <PreviousWorkInfo data={portfolioDetailsData?.portfolio} />
        {blocks.length > 0 && <BlocksRender blocks={blocks} />}{" "}
      </main>
    </>
  );
};

export default PreviousWorkDetails;
