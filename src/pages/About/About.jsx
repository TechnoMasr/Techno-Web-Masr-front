import { getAbout } from "@/api/homeServices";
import BlocksRender from "@/components/sections/BlocksRender";
import BlocksRenderSkeleton from "@/components/skeletons/BlocksRenderSkeleton";
import { useQuery } from "@tanstack/react-query";
import PageBanner from "@/components/sections/PageBanner";
import { useTranslation } from "react-i18next";
import SeoManager from "@/utils/SeoManager";

const About = () => {
  const { t } = useTranslation();

  const { data: aboutData, isLoading } = useQuery({
    queryKey: ["about"],
    queryFn: getAbout,
  });

  if (isLoading) return <BlocksRenderSkeleton />;

  const seo = aboutData?.seo;

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
        <PageBanner title={t("about_us")} />

        <BlocksRender blocks={aboutData?.page?.blocks} />
      </main>
    </>
  );
};

export default About;
