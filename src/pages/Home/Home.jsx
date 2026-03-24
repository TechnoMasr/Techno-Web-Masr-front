import { getHome } from "@/api/homeServices";
import BlocksRender from "@/components/sections/BlocksRender";
import BlocksRenderSkeleton from "@/components/skeletons/BlocksRenderSkeleton";
import SeoManager from "@/utils/SeoManager";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data: homeData, isLoading } = useQuery({
    queryKey: ["home"],
    queryFn: getHome,
  });

  if (isLoading) return <BlocksRenderSkeleton />;

  return (
    <>
      <SeoManager
        title={homeData?.seo?.title}
        description={homeData?.seo?.description}
        keywords={homeData?.seo?.keywords}
        canonical={homeData?.seo?.canonical}
        ogImage={homeData?.seo?.ogImage}
      />

      <main>
        <BlocksRender blocks={homeData?.page?.blocks} />
      </main>
    </>
  );
};

export default Home;
