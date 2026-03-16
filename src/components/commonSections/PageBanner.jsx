// import PageBannerSkeleton from "../Loading/SkeletonLoading/PageBannerSkeleton";
import bgImg from "@/assets/images/bg-img.png";

const PageBanner = ({ image, title }) => {
  // if (loading) return <PageBannerSkeleton />;

  return (
    <article
      className="w-full min-h-64 bg-cover bg-center bg-primary relative content-end"
      style={{ backgroundImage: `url(${image || bgImg})` }}
    >
      {/* <div className="absolute inset-0 bg-primary/50" /> */}

      <div className="relative z-10 container h-full pt-20 pb-4 lg:pb-10 flex flex-col items-start justify-end gap-2 lg:gap-4">
        {title && (
          <h1 className="text-3xl lg:text-4xl text-white capitalize">
            {title}
          </h1>
        )}
      </div>
    </article>
  );
};

export default PageBanner;
