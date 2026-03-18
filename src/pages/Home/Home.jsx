
import { getHome } from "@/api/homeServices";
import BlocksRender from "@/components/sections/BlocksRender";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data: homeData, isLoading } = useQuery({
    queryKey: ["home"],
    queryFn: getHome,
  });
  if (isLoading) return <div>Loading...</div>;

  console.log("homeData", homeData);
  return (
    <main>
      <BlocksRender blocks={homeData?.page?.blocks} />

      {/* <Hero />
      <StatisticsSection />
      <WhoWeAre />
      <ServicesSection />
      <WhyChooseUs />
      <PreviousWorkSection />
      <PartnersSection />
      <TestimonialsSection /> */}
    </main>
  );
};

export default Home;
