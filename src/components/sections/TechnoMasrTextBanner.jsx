import useHandleAction from "@/hooks/useHandleAction";
import TechnoMasrTextBannerSkeleton from "../skeletons/TechnoMasrTextBannerSkeleton";
import { Button } from "../ui/button";

const TechnoMasrTextBanner = ({ block, loading }) => {
  const handleAction = useHandleAction();

  if (loading) return <TechnoMasrTextBannerSkeleton />;

  return (
    <section className={`sectionPadding`}>
      <div className="container max-w-2xl flex flex-col items-center text-center gap-6">
        <h2 className="text-3xl lg:text-4xl font-semibold text-primary">
          {block.title}
        </h2>
        <p className="font-medium">{block.description}</p>

        <div className="flex gap-2">
          <Button
            onClick={() =>
              handleAction(block?.other_data?.btn_1_url, {
                serviceId: block?.serviceId,
                serviceTitle: block?.serviceTitle,
              })
            }
            variant="secondary"
          >
            {block?.other_data?.btn_1_text}
          </Button>

          <Button
            onClick={() =>
              handleAction(block?.other_data?.btn_2_url, {
                serviceId: block?.serviceId,
                serviceTitle: block?.serviceTitle,
              })
            }
            variant="outline"
          >
            {block?.other_data?.btn_2_text}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechnoMasrTextBanner;
