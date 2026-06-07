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
import NotFound from "../NotFound/NotFound";

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

  // لو الاعمال غير موجوده
  if (
    !portfolioDetailsData ||
    portfolioDetailsData?.length === 0 ||
    !portfolioDetailsData?.portfolio
  ) {
    return <NotFound />;
  }

  const seo = portfolioDetailsData?.seo;

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
        <PageBanner title={portfolioDetailsData?.portfolio?.name} />
        <PreviousWorkInfo data={portfolioDetailsData?.portfolio} />
        {blocks.length > 0 && (
          <BlocksRender
            blocks={blocks}
            serviceId={portfolioDetailsData?.portfolio?.id}
            serviceTitle={portfolioDetailsData?.portfolio?.name}
          />
        )}
      </main>
    </>
  );
};

export default PreviousWorkDetails;
