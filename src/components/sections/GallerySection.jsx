import GallerySectionSkeleton from "../skeletons/GallerySectionSkeleton";

const GallerySection = ({ block, loading }) => {
  if (loading) return <GallerySectionSkeleton />;

  const bigImage = block?.block_items[0]?.image_url;
  const images = block?.block_items[0]?.images_url;

  return (
    <section className="container sectionPadding">
      <div className="space-y-4">
        {/* Main Image */}
        <div className="w-full h-75 md:h-95 rounded-2xl overflow-hidden">
          <img
            loading="lazy"
            src={bigImage}
            alt="gallery"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images?.map((img, index) => (
            <div key={index} className="aspect-4/3 rounded-xl overflow-hidden">
              <img
                loading="lazy"
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
