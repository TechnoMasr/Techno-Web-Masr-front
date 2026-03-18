import image from "@/assets/images/bg-img.png";
import GallerySectionSkeleton from "../skeletons/GallerySectionSkeleton";

const GallerySection = () => {
  const list = [image, image, image, image];

  // const loading = true;

  // if (loading) return <GallerySectionSkeleton />;

  return (
    <section className="container sectionPadding">
      <div className="space-y-6">
        {/* Main Image */}
        <div className="w-full h-75 md:h-95 rounded-2xl overflow-hidden">
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
