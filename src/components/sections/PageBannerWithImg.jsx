import bgImg from "@/assets/images/bg-img.png";
import { Button } from "../ui/button";
import { HiArrowNarrowLeft } from "react-icons/hi";
import PageBannerWithImgSkeleton from "../skeletons/PageBannerWithImgSkeleton";
import useHandleAction from "@/hooks/useHandleAction";

const PageBannerWithImg = ({ block, loading }) => {
  const handleAction = useHandleAction();

  if (loading) return <PageBannerWithImgSkeleton />;

  return (
    <section
      className="bg-center bg-cover w-full h-screen md:h-[80vh] content-center pt-24 pb-16 md:mb-14"
      style={{ backgroundImage: `url(${block.bg_image || bgImg})` }}
    >
      <div className="container w-full h-full flex flex-col justify-center md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 h-62.5 md:h-full">
          <img
            loading="lazy"
            src={block.image_url}
            alt=""
            className="w-[90%] sm:w-[60%] md:w-full h-full object-contain mx-auto md:translate-y-[35%] drop-shadow-xl"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-2 items-center md:items-start text-center md:text-start capitalize">
          <h1 className="text-3xl lg:text-4xl font-medium text-white">
            {block.title}
          </h1>

          <p className="text-white/80 text-sm">{block.description}</p>

          <Button
            onClick={() =>
              handleAction(block?.other_data?.btn_1_url, {
                serviceId: block?.serviceId,
                serviceTitle: block?.serviceTitle,
              })
            }
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

export default PageBannerWithImg;
