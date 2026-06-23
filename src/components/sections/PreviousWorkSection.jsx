import PreviousWorkCard from "@/components/cards/PreviousWorkCard";
import SectionTitle from "@/components/common/SectionTitle";
import MainSlider from "@/components/sections/MainSlider";
import PreviousWorkSectionSkeleton from "../skeletons/PreviousWorkSectionSkeleton";
import { useTranslation } from "react-i18next";

const PreviousWorkSection = ({ block, loading }) => {
  const { t } = useTranslation();
  // const { data: portfolioData, isLoading } = useQuery({
  //   queryKey: ["portfolioSlider"],
  //   queryFn: getPortfolioSlider,
  //   enabled: !block?.block_items?.length,
  // });

  if (loading) return <PreviousWorkSectionSkeleton />;

  if (!block?.block_items?.length) return null;

  const portfolio = block?.block_items?.length > 0 ? block.block_items : [];

  return (
    <section>
      <div className="container sectionPadding">
        <SectionTitle
          title={block?.title}
          description={block?.description}
          link={{
            href: block?.other_data?.btn_1_url || "/previous-work",
            text: block?.other_data?.btn_1_text || t("PreviousWorkSection.viewAll"),
          }}
        />

        <MainSlider
          breakpoints={{
            0: { slidesPerView: 1 },
            375: { slidesPerView: 1.5 },
            570: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 3.5 },
            1200: { slidesPerView: 4 },
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
