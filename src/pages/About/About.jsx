import { getAbout } from "@/api/homeServices";
import BlocksRender from "@/components/sections/BlocksRender";
import { useQuery } from "@tanstack/react-query";


const About = () => {

  

  const { data: aboutData, isLoading } = useQuery({
    queryKey: ["about"],
    queryFn: getAbout,
  });
  if (isLoading) return <div>Loading...</div>;

  return (
    <main>

      <BlocksRender blocks={aboutData?.page?.blocks} />

      {/* <WhoWeAre />
      <VisionAndMission />
      <StartWithUsBanner />
      <Faqs />
      <WhyChooseUs />
      <TestimonialsSection /> */}
    </main>
  );
};

export default About;
