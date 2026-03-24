import bgImg from "@/assets/images/bg-img.png";
import pcImg from "@/assets/images/pc-img.png";
import { Button } from "@/components/ui/button";
import { HiArrowNarrowLeft } from "react-icons/hi";
import StartWithUsBannerSkeleton from "../skeletons/StartWithUsBannerSkeleton";
import { useEffect, useState } from "react";
import useHandleAction from "@/hooks/useHandleAction";

const StartWithUsBanner = ({ block }) => {
  // const loading = true;

  // if (loading) return <StartWithUsBannerSkeleton />;

  const handleAction = useHandleAction();

  const [title, setTitle] = useState(block.title);

  useEffect(() => {
    console.log("block", block);
    setTitle(block.title.split("#"));
  }, [block]);

  return (
    <section className="container sectionPadding">
      <div
        className="bg-center bg-cover w-full min-h-72 content-center p-8 
        flex flex-col md:flex-row items-center gap-4 lg:gap-10 rounded-3xl shadow relative overflow-hidden"
        style={{ backgroundImage: `url(${block.bg_image || bgImg})` }}
      >
        <div className="absolute inset-0 bg-primary/80" />

        <div className="w-full md:w-1/2 h-50 md:h-75 relative z-10">
          <img
            loading="lazy"
            src={pcImg}
            alt=""
            className="w-[70%] sm:w-[60%] md:w-[90%] h-full object-contain mx-auto"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-2 items-center md:items-start text-center md:text-start capitalize relative z-10">
          <h1 className="text-3xl lg:text-4xl font-medium text-white">
            {title[0]}
          </h1>

          <h2 className="text-2xl lg:text-3xl font-medium text-secondary">
            {title[1]}
          </h2>

          <p className="text-white/80 text-sm">{block.description}</p>

          <div className="flex items-center justify-center flex-wrap gap-2 mt-6">
            {block.other_data && block.other_data.btn_1_enabled && (
              <Button
                variant="secondary"
                className="min-w-40 group"
                onClick={() =>
                  handleAction(block?.other_data?.btn_1_url, {
                    serviceId: block?.serviceId,
                    serviceTitle: block?.serviceTitle,
                  })
                }
              >
                {block.other_data.btn_1_text}
                <HiArrowNarrowLeft className="ltr:rotate-180 group-hover:-translate-x-1 ltr:group-hover:translate-x-1 transition-all duration-300" />
              </Button>
            )}

            {block.other_data && block.other_data.btn_2_enabled && (
              <Button
                variant="outline"
                className={`min-w-40 group`}
                onClick={() =>
                  handleAction(block.other_data.btn_2_url, {
                    serviceId: block?.serviceId,
                    serviceTitle: block?.serviceTitle,
                  })
                }
              >
                {block.other_data.btn_2_text}
                <HiArrowNarrowLeft className="ltr:rotate-180 group-hover:-translate-x-1 ltr:group-hover:translate-x-1 transition-all duration-300" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartWithUsBanner;
