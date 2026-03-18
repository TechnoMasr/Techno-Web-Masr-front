
import { getServiceDetails } from "@/api/pagesServices";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

import BlocksRender from "@/components/sections/BlocksRender";
import { useState } from "react";
import { useEffect } from "react";

const ServicesDetails = () => {
  const { slug } = useParams();

  const { data: serviceDetailsData, isLoading } = useQuery({
    queryKey: ["serviceDetails", slug],
    queryFn: () => getServiceDetails(slug),
  });




 const [blocks, setBlocks] = useState([]) 
 useEffect(() => {
  if(serviceDetailsData?.service?.blocks){
    setBlocks(serviceDetailsData?.service?.blocks)
  }
 }, [serviceDetailsData])
  return (
    <main>

      {
      blocks.length > 0 && (
          <BlocksRender blocks={blocks} />
        )
      }
  
    </main>
  );
};

export default ServicesDetails;
