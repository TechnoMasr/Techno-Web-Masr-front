import image from "@/assets/images/bg-img.png";

const GallerySection = () => {
  const list = [image, image, image, image];

  return (
    <section className="container sectionPadding">
      <div className="space-y-6">
        {/* Main Image */}
        <div className="w-full h-[300px] md:h-[380px] lg:h-[380px] rounded-2xl overflow-hidden">
          <img
            src={image}
            alt="gallery"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {list.map((img, index) => (
            <div key={index} className="aspect-4/3 rounded-xl overflow-hidden">
              <img
                src={img}
                alt="thumb"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
