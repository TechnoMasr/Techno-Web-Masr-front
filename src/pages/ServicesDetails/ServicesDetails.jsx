import { getServiceDetails } from "@/api/pagesServices";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import BlocksRender from "@/components/sections/BlocksRender";
import { useState } from "react";
import { useEffect } from "react";
import BlocksRenderSkeleton from "@/components/skeletons/BlocksRenderSkeleton";
import SeoManager from "@/utils/SeoManager";

const ServicesDetails = () => {
  const { slug } = useParams();

  const { data: serviceDetailsData, isLoading } = useQuery({
    queryKey: ["serviceDetails", slug],
    queryFn: () => getServiceDetails(slug),
  });

  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    if (serviceDetailsData?.service?.blocks) {
      setBlocks(serviceDetailsData?.service?.blocks);
    }
  }, [serviceDetailsData]);

  if (isLoading) return <BlocksRenderSkeleton />;

  return (
    <>
      <SeoManager
        title={serviceDetailsData?.seo?.title}
        description={serviceDetailsData?.seo?.description}
        keywords={serviceDetailsData?.seo?.keywords}
        canonical={serviceDetailsData?.seo?.canonical}
        ogImage={serviceDetailsData?.seo?.ogImage}
      />

      <main>
        {blocks.length > 0 && (
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
