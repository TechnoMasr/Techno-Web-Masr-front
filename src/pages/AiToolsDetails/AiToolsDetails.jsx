import Header from "@/components/layout/Header/Header";
import { useParams } from "react-router";

import HeadSection from "./section/HeadSection";
import LongDescription from "./section/LongDescription";
import FeatureCards from "./section/FeatureCards";
import ReviewSection from "./section/ReviewSection";
import SimilarToolsSection from "./section/SimilarToolsSection";
import SidebarSection from "./section/SidebarSection";

const AiToolsDetails = () => {
  const { slug } = useParams();

  return (
    <>
      <Header alwaysScrolled />

      <main className="pt-20 bg-slate-50">
        <div className="container pagePadding grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <HeadSection />
            <LongDescription />
            <FeatureCards />
            <ReviewSection />
            <SimilarToolsSection />
          </div>

          <SidebarSection />
        </div>
      </main>
    </>
  );
};

export default AiToolsDetails;
