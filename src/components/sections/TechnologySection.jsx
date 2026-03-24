import useHandleAction from "@/hooks/useHandleAction";
import TitleAndDescription from "../common/TitleAndDescription";
import { Button } from "../ui/button";

const TechnologySection = ({ block }) => {
  const handleAction = useHandleAction();

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
                  loading="lazy"
                  src={item.image_url}
                  alt="partner"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="font-semibold text-primary">{item.title}</h3>
            </li>
          ))}
        </ul>

        <Button
          className={`mx-auto block`}
          onClick={() =>
            handleAction(block.other_data.btn_1_url, {
              serviceId: block?.serviceId,
              serviceTitle: block?.serviceTitle,
            })
          }
        >
          {block.other_data.btn_1_text}
        </Button>
      </div>
    </section>
  );
};

export default TechnologySection;
