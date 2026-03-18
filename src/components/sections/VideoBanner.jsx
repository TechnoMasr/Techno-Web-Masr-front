import image from "@/assets/images/bg-img.png";
import VideoBannerSkeleton from "../skeletons/VideoBannerSkeleton";

const VideoBanner = () => {

// const loading = true;

  // if (loading) return <VideoBannerSkeleton />;

  return (
    <section className="container sectionPadding">
      <div className="w-full h-75 md:h-95 rounded-2xl overflow-hidden">
        <img src={image} alt="video" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default VideoBanner;
