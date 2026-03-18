import SectionTitle from "@/components/common/SectionTitle";
import image from "@/assets/images/Phone.png";
import PartnersSectionSkeleton from "../skeletons/PartnersSectionSkeleton";

const PartnersSection = ({ block, loading }) => {
  if (loading) return <PartnersSectionSkeleton />;

  return (
    <section
      className="bg-center bg-cover relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-gray-100/90" />

      <div className="container sectionPadding relative z-10">
        <SectionTitle title={block?.title} />

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-8">
          {block?.block_items?.map((item) => (
            <li
              key={item.id}
              className="bg-white shadow rounded-2xl border w-full aspect-video overflow-hidden p-2"
            >
              <img
                src={item.image_url}
                alt="partner"
                className="w-full h-full object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default PartnersSection;
