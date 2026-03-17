import image from "@/assets/images/Device - Macbook Pro.png";
import { LuFolderCode } from "react-icons/lu";
import { PiPaintBrushHouseholdLight } from "react-icons/pi";

const WhyChooseUs = () => {
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
    {
      id: 3,
      title: "تصميم المواقع",
      description:
        "احصائيات تيكنو ويب مصر في هذه احصائيات تيكنو ويب مصر في هذه الاحصائيات",
      icon: <LuFolderCode />,
    },
    {
      id: 4,
      title: "تصميم المواقع",
      description:
        "احصائيات تيكنو ويب مصر في هذه احصائيات تيكنو ويب مصر في هذه الاحصائيات",
      icon: <LuFolderCode />,
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-1/2 inset-s-0 -translate-y-1/2 -z-10 w-[80%] h-full bg-secondary/20 rounded-full blur-[120px]" />

      <div className="container sectionPadding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 place-items-center">
          <div className="flex flex-col gap-4 lg:gap-6">
            <h3 className="text-xl font-semibold text-primary">
              لماذا تختار تكنو ويب مصر
            </h3>

            <p className="text-foreground font-medium text-sm">
              تكنو ويب مصر هي شركة متخصصة في الحلول الرقمية وتصميم وتطوير
              الــمـــواقـــع الإلــكــتــرونـيـة، المـتـاجـر الإلكـتـرونـيـة،
              والتـطبيقات، بالإضافة إلى
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {list.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col gap-2 p-3 shadow rounded-md bg-primary text-white"
                >
                  <span className="text-2xl text-secondary">{item.icon}</span>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-xs opacity-80 font-medium">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-100 overflow-hidden hidden md:block">
            <img src={image} alt="" className="w-full h-full object-contain drop-shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
