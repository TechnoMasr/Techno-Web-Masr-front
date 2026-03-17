import image from "@/assets/images/bg-img.png";

const VideoBanner = () => {
  return (
    <section className="container sectionPadding">
      <div className="w-full h-[300px] md:h-[380px] lg:h-[380px] rounded-2xl overflow-hidden">
        <img src={image} alt="video" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default VideoBanner;
