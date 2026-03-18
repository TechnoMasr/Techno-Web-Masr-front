import SectionTitle from "@/components/common/SectionTitle";
import VisionAndMissionSkeleton from "../skeletons/VisionAndMissionSkeleton";

const VisionAndMission = ({ block, loading }) => {
  if (loading) return <VisionAndMissionSkeleton />;

  return (
    <section className="container sectionPadding">
      <SectionTitle title={block?.title} />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {block?.block_items.map((item) => (
          <li
            key={item.id}
            className="flex flex-col gap-2 bg-white text-primary shadow rounded-xl border p-3"
          >
            {/* <span className="text-3xl">{item.icon}</span> */}
            <img src={item.image_url} alt="" className="w-8 h-8" />
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-xs font-medium">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default VisionAndMission;
