import bgImg from "@/assets/images/bg-img.png";
import { Button } from "@/components/ui/button";
import { HiArrowNarrowLeft } from "react-icons/hi";
import HeroSkeleton from "../skeletons/HeroSkeleton";
import useHandleAction from "@/hooks/useHandleAction";

const Hero = ({ block, loading }) => {
  const handleAction = useHandleAction();

  if (loading) return <HeroSkeleton />;

  return (
    <section
      className="bg-center bg-cover w-full min-h-screen content-center pt-24 pb-16"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container w-full h-full flex flex-col md:flex-row items-center gap-4 md:gap-10">
        <div className="w-full md:w-1/2 h-62.5 md:h-100">
          <img
            src={block.image_url}
            alt=""
            className="w-[70%] sm:w-[60%] md:w-[90%] h-full object-contain mx-auto"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-2 items-center md:items-start text-center md:text-start capitalize">
          <h1 className="text-3xl lg:text-4xl font-medium text-white">
            {block.title}
          </h1>

          <p className="text-white/80 text-sm">{block.description}</p>

          <Button
            onClick={() => handleAction(block?.other_data?.btn_1_url)}
            variant="secondary"
            className="mt-6 group"
          >
            {block?.other_data?.btn_1_text}
            <HiArrowNarrowLeft className="ltr:rotate-180 group-hover:-translate-x-1 ltr:group-hover:translate-x-1 transition-all duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
