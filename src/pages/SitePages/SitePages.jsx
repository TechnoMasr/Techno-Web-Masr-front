import { pageDetails } from "@/api/pagesServices";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

import BlocksRender from "@/components/sections/BlocksRender";
import { useState } from "react";
import { useEffect } from "react";

const SitePages = () => {
  const { slug } = useParams();
 

  const { data: pageDetailsData, isLoading } = useQuery({
    queryKey: ["pageDetails", slug],
    queryFn: () => pageDetails(slug),
  });

  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    if (pageDetailsData?.service?.blocks) {
      setBlocks(pageDetailsData?.service?.blocks);
    }
  }, [pageDetailsData]);

  return <main>{blocks.length > 0 && <BlocksRender blocks={blocks} />}</main>;



};

export default SitePages;
