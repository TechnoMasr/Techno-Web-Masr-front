import Header from "@/components/layout/Header/Header";
import { useParams } from "react-router";
import HeadSection from "./section/HeadSection";
import LongDescription from "./section/LongDescription";
import FeatureCards from "./section/FeatureCards";
import ReviewSection from "./section/ReviewSection";
import SimilarToolsSection from "./section/SimilarToolsSection";
import SidebarSection from "./section/SidebarSection";
import CompareSection from "./section/CompareSection";
import { getAIToolDetails } from "@/api/AIToolsServices";
import { useQuery } from "@tanstack/react-query";
import AiToolsDetailsSkeleton from "@/components/skeletons/AiToolsDetailsSkeleton";
import CompareSteps from "./section/CompareSteps";
import LinksSections from "./section/LinksSections";
import SeoManager from "@/utils/SeoManager";

const AiToolsDetails = () => {
  const { slug } = useParams();

  const { data: aiToolData, isLoading } = useQuery({
    queryKey: ["AiToolDetails", slug],
    queryFn: () => getAIToolDetails(slug),
  });

  const AITool = aiToolData?.ai_tool || {};

  return (
    <>
      <Header alwaysScrolled />

      <SeoManager
        title={AITool?.seo?.meta_title}
        description={AITool?.seo?.meta_description}
        keywords={AITool?.seo?.keywords}
        canonical={AITool?.seo?.canonical_url}
        ogImage={AITool?.seo?.og_image_url}
      />

      {isLoading ? (
        <AiToolsDetailsSkeleton />
      ) : (
        aiToolData?.ai_tool && (
          <main className="pt-20 bg-slate-50">
            <div className="container pagePadding grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 flex flex-col gap-6">
                <HeadSection data={AITool} />
                <LongDescription text={AITool?.overview} />
                <FeatureCards data={AITool?.main_features} />
                <ReviewSection
                  pros={AITool?.pro_features}
                  cons={AITool?.con_features}
                />
                <SimilarToolsSection data={AITool?.similar_tools} />
                <CompareSection
                  currentProduct={AITool}
                  tips={aiToolData?.comparisons?.tips_for_choosing}
                />
                <CompareSteps data={aiToolData?.comparisons} />
                <LinksSections />
              </div>

              <SidebarSection data={AITool} />
            </div>
          </main>
        )
      )}
    </>
  );
};

export default AiToolsDetails;
