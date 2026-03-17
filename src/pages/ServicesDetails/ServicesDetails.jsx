import ImagesSliderSection from "@/components/commonSections/ImagesSliderSection";
import PageBanner from "@/components/commonSections/PageBanner";
import PageBannerWithImg from "@/components/commonSections/PageBannerWithImg";
import VideoBanner from "@/components/commonSections/VideoBanner";
import TextAndImage from "@/components/commonSections/TextAndImage";
import MobileAndSteps from "@/components/commonSections/MobileAndSteps";
import MobileInCenter from "@/components/commonSections/MobileInCenter";
import TitleAndSteps from "@/components/commonSections/TitleAndSteps";
import TechnologySection from "@/components/commonSections/TechnologySection";
import TechnoMasrTextBanner from "@/components/commonSections/TechnoMasrTextBanner";
import image from "@/assets/images/bg-img.png";
import WhyChooseUs from "@/components/commonSections/WhyChooseUs";

const ServicesDetails = () => {
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
