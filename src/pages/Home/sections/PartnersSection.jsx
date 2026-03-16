import SectionTitle from "@/components/common/SectionTitle";
import image from "@/assets/images/pc-img.png";

const PartnersSection = () => {
  const list = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    image: image,
  }));

  return (
    <section
      className="bg-center bg-cover relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-gray-100/90" />

      <div className="container sectionPadding relative z-10">
        <SectionTitle title={"شركاء نجاح تكنو ويب مصر"} />

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-8">
          {list.map((item) => (
            <li
              key={item.id}
              className="bg-white shadow rounded-2xl border w-full aspect-video overflow-hidden p-4"
            >
              <img
                src={item.image}
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
