import PageBanner from "@/components/commonSections/PageBanner";
import WhoWeAre from "@/components/commonSections/WhoWeAre";
import StartWithUsBanner from "@/components/commonSections/StartWithUsBanner";
import Faqs from "@/components/commonSections/Faqs";
import VisionAndMission from "./sections/VisionAndMission";
import WhyChooseUs from "@/components/commonSections/WhyChooseUs";
import TestimonialsSection from "@/components/commonSections/TestimonialsSection";

const About = () => {
  return (
    <main>
      <PageBanner title={"من نحن"} />

      <WhoWeAre />
      <VisionAndMission />
      <StartWithUsBanner />
      <Faqs />
      <WhyChooseUs />
      <TestimonialsSection />
    </main>
  );
};

export default About;
