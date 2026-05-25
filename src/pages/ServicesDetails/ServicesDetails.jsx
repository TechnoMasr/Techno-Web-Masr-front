import { getServiceDetails } from "@/api/pagesServices";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import BlocksRender from "@/components/sections/BlocksRender";
import { useState, useEffect } from "react";
import BlocksRenderSkeleton from "@/components/skeletons/BlocksRenderSkeleton";
import SeoManager from "@/utils/SeoManager";
import NotFound from "../NotFound/NotFound";

const ServicesDetails = () => {
  const { slug } = useParams();

  const { data: serviceDetailsData, isLoading } = useQuery({
    queryKey: ["serviceDetails", slug],
    queryFn: () => getServiceDetails(slug),
  });

  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    if (serviceDetailsData?.service?.blocks) {
      setBlocks(serviceDetailsData.service.blocks);
    } else {
      setBlocks([]);
    }
  }, [serviceDetailsData]);

  if (isLoading) return <BlocksRenderSkeleton />;

  const seo = serviceDetailsData?.seo;

  const hasNoBlocks = !blocks || blocks.length === 0;

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
          <NotFound />
        ) : (
          <BlocksRender
            blocks={blocks}
            serviceId={serviceDetailsData?.service?.id}
            serviceTitle={serviceDetailsData?.service?.title}
          />
        )}
      </main>
    </>
  );
};

export default ServicesDetails;
