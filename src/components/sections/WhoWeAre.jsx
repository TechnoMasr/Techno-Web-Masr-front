import SectionTitle from "@/components/common/SectionTitle";
import { LuFolderCode } from "react-icons/lu";
import { PiPaintBrushHouseholdLight } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import WhoWeAreSkeleton from "../skeletons/WhoWeAreSkeleton";
import useHandleAction from "@/hooks/useHandleAction";

const WhoWeAre = ({ block, loading, top_title, top_desc }) => {
  const list = [
    {
      id: 1,
      title: "تصميم المواقع",
      description:
        "احصائيات تيكنو ويب مصر في هذه احصائيات تيكنو ويب مصر في هذه الاحصائيات",
      icon: <PiPaintBrushHouseholdLight />,
    },
    {
      id: 2,
      title: "تصميم المواقع",
      description:
        "احصائيات تيكنو ويب مصر في هذه احصائيات تيكنو ويب مصر في هذه الاحصائيات",
      icon: <LuFolderCode />,
    },
  ];

  console.log("top_title", top_title, top_desc);

  const handleAction = useHandleAction();

  if (loading) return <WhoWeAreSkeleton />;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-1/2 inset-s-0 -translate-y-1/2 -z-10 w-[80%] h-full bg-secondary/20 rounded-full blur-[120px]" />

      <div className="container sectionPadding">
        <SectionTitle title={block?.top_title} description={block?.top_desc} />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-8">
          <div className="col-span-1 md:col-span-2 aspect-12/9 md:aspect-11/12 overflow-hidden rounded-2xl shadow">
            <img
              loading="lazy"
              src={block.image_url}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-4 lg:gap-6 md:col-span-3">
            <h3 className="text-xl font-semibold text-primary">
              {block.title}
            </h3>

            <p className="text-foreground font-medium text-sm">
              {block.description}
            </p>

            <ul className="grid grid-cols-2 gap-4 md:gap-8">
              {block?.block_items?.map((item) => (
                <li key={item.id} className="flex flex-col gap-2 text-primary">
                  <span className="text-lg font-bold bg-secondary/30 rounded-full w-10 h-10 flex items-center justify-center">
                    <img
                      loading="lazy"
                      src={item.image_url}
                      alt="icon"
                      className="w-5 h-5"
                    />
                  </span>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-xs text-foreground font-medium">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 mt-auto">
              <Button
                onClick={() =>
                  handleAction(block.other_data.btn_1_url, {
                    serviceId: block?.serviceId,
                    serviceTitle: block?.serviceTitle,
                  })
                }
              >
                {block.other_data.btn_1_text}
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  handleAction(block.other_data.btn_2_url, {
                    serviceId: block?.serviceId,
                    serviceTitle: block?.serviceTitle,
                  })
                }
              >
                {block.other_data.btn_2_text}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
