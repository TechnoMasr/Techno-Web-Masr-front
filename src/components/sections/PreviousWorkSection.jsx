import PreviousWorkCard from "@/components/cards/PreviousWorkCard";
import SectionTitle from "@/components/common/SectionTitle";
import MainSlider from "@/components/sections/MainSlider";
import PreviousWorkSectionSkeleton from "../skeletons/PreviousWorkSectionSkeleton";
import { useQuery } from "@tanstack/react-query";
import { getPortfolioSlider } from "@/api/mainServices";

const PreviousWorkSection = ({ block, loading }) => {
  const { data: portfolioData, isLoading } = useQuery({
    queryKey: ["portfolioSlider"],
    queryFn: getPortfolioSlider,
    enabled: !block?.block_items?.length,
  });

  if (loading || isLoading) return <PreviousWorkSectionSkeleton />;

  const portfolio =
    block?.block_items?.length > 0 ? block.block_items : portfolioData || [];

  return (
    <section>
      <div className="container sectionPadding">
        <SectionTitle
          title={"سابقة اعمال تكنو ويب مصر"}
          description={
            "تكنو ويب مصر هي شركة متخصصة في الحلول الرقمية وتصميم وتطوير المواقع الإلكترونية،"
          }
          link={{
            href: "/portfolio",
            text: "عرض جميع الاعمال",
          }}
        />

        <MainSlider
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 1.3 },
            570: { slidesPerView: 2.6 },
            640: { slidesPerView: 3 },
            // 780: { slidesPerView: 3.5 },
            960: { slidesPerView: 4 },
          }}
          data={portfolio || []}
          renderItem={(project) => (
            <PreviousWorkCard key={project.id} item={project} />
          )}
        />
      </div>
    </section>
  );
};

export default PreviousWorkSection;
