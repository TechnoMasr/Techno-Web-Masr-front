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

  const seo = homeData?.seo;

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
        <BlocksRender blocks={homeData?.page?.blocks} />
      </main>
    </>
  );
};

export default Home;
