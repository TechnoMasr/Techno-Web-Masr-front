import ImagesSliderSection from "@/components/sections/ImagesSliderSection";
import PageBanner from "@/components/sections/PageBanner";
import PageBannerWithImg from "@/components/sections/PageBannerWithImg";
import VideoBanner from "@/components/sections/VideoBanner";
import TextAndImage from "@/components/sections/TextAndImage";
import MobileAndSteps from "@/components/sections/MobileAndSteps";
import MobileInCenter from "@/components/sections/MobileInCenter";
import TitleAndSteps from "@/components/sections/TitleAndSteps";
import TechnologySection from "@/components/sections/TechnologySection";
import TechnoMasrTextBanner from "@/components/sections/TechnoMasrTextBanner";
import image from "@/assets/images/bg-img.png";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { getServiceDetails } from "@/api/pagesServices";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

const ServicesDetails = () => {
  const { slug } = useParams();

  const { data: serviceDetailsData, isLoading } = useQuery({
    queryKey: ["serviceDetails", slug],
    queryFn: () => getServiceDetails(slug),
  });

  return (
    <main>
      <PageBanner title={"خدماتنا"} />
      <PageBannerWithImg />
      <ImagesSliderSection />
      <VideoBanner />
      <WhyChooseUs />
      <TextAndImage yellowCircle={true} imageFirst={true} />
      <TextAndImage backgroundImage={image} />
      <MobileAndSteps />
      <MobileInCenter />
      <TitleAndSteps />
      <TechnologySection />
      <TechnoMasrTextBanner />
    </main>
  );
};

export default ServicesDetails;
