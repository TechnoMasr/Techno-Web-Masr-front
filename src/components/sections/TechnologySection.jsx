import TitleAndDescription from "../common/TitleAndDescription";
import TechnologySectionSkeleton from "../skeletons/TechnologySectionSkeleton";
import { Button } from "../ui/button";
import image from "@/assets/images/pc-img.png";

const TechnologySection = ({ block }) => {


  return (
    <section className={`sectionPadding`}>
      <div className="container space-y-8">
        <TitleAndDescription title={block.title} />

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {block.block_items.map((item) => (
            <li
              key={item.id}
              className="bg-white shadow rounded-md border w-full aspect-video
              flex flex-col items-center text-center gap-2 p-4"
            >
              <div className="h-20 aspect-video overflow-hidden mb-2">
                <img
                  src={item.image_url}
                  alt="partner"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="font-semibold text-primary">{item.title}</h3>
            </li>
          ))}
        </ul>

        <Button className={`mx-auto block`}>اطلب الخدمه</Button>
      </div>
    </section>
  );
};

export default TechnologySection;
