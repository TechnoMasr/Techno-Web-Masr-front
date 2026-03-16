import Hero from "./sections/Hero";
import StatisticsSection from "./sections/StatisticsSection";
import WhoWeAre from "@/components/commonSections/WhoWeAre";
import ServicesSection from "./sections/ServicesSection";
import WhyChooseUs from "@/components/commonSections/WhyChooseUs";
import PreviousWorkSection from "./sections/PreviousWorkSection";
import PartnersSection from "./sections/PartnersSection";
import TestimonialsSection from "@/components/commonSections/TestimonialsSection";

const Home = () => {
  return (
    <main>
      <Hero />
      <StatisticsSection />
      <WhoWeAre />
      <ServicesSection />
      <WhyChooseUs />
      <PreviousWorkSection />
      <PartnersSection />
      <TestimonialsSection />
    </main>
  );
};

export default Home;
