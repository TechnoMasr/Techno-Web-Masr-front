import HeroSkeleton from "./HeroSkeleton";
import PageBannerSkeleton from "./PageBannerSkeleton";
import TextAndImageSkeleton from "./TextAndImageSkeleton";
import TitleAndStepsSkeleton from "./TitleAndStepsSkeleton";

const BlocksRenderSkeleton = ({ hero = false }) => {
  return (
    <main>
      {hero ? <HeroSkeleton /> : <PageBannerSkeleton />}
      <TextAndImageSkeleton />
      <TitleAndStepsSkeleton />
    </main>
  );
};

export default BlocksRenderSkeleton;
