import SectionTitle from "@/components/common/SectionTitle";
import image from "@/assets/images/bg-img.png";
import { LuFolderCode } from "react-icons/lu";
import { PiPaintBrushHouseholdLight } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import WhoWeAreSkeleton from "../skeletons/WhoWeAreSkeleton";

const WhoWeAre = () => {
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

  // const isLoading = true;

  // if (isLoading) return <WhoWeAreSkeleton />;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-1/2 inset-s-0 -translate-y-1/2 -z-10 w-[80%] h-full bg-secondary/20 rounded-full blur-[120px]" />

      <div className="container sectionPadding">
        
        <SectionTitle
          title={"من هي تكنو ويب مصر"}
          description={
            "تكنو ويب مصر هي شركة متخصصة في الحلول الرقمية وتصميم وتطوير المواقع الإلكترونية، المتاجر الإلكترونية، والتطبيقات، بالإضافة إلى أنظمة البرمجيات المخصصة للشركات. تهدف الشركة إلى"
          }
        />


        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-8">
          <div className="col-span-1 md:col-span-2 aspect-12/9 md:aspect-11/12 overflow-hidden rounded-2xl shadow">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col gap-4 lg:gap-6 md:col-span-3">
            <h3 className="text-xl font-semibold text-primary">
              تعرف علي بعض التفاصيل عن شركتنا وسبب نجاحنا في جميع الاسواق التي
              نعمل بها الان
            </h3>

            <p className="text-foreground font-medium text-sm">
              تكنو ويب مصر هي شركة متخصصة في الحلول الرقمية وتصميم وتطوير
              الــمـــواقـــع الإلــكــتــرونـيـة، المـتـاجـر الإلكـتـرونـيـة،
              والتـطبيقات، بالإضافة إلى أنــظــمــة الــبــرمجــيــات
              المــخــصصــة لـلـشركــات. تــهدف الشركة إلى تمكين الأعــمــال من
              التــحول الرقــمي مــن خـــلال تــقــديم حــلــول مـبـتكرة تجمع
              بين التصميم الاحترافي، الأداء التقني العالي، وتجربة المستخدم
              المتطورة.
            </p>

            <ul className="grid grid-cols-2 gap-4 md:gap-8">
              {list.map((item) => (
                <li key={item.id} className="flex flex-col gap-2 text-primary">
                  <span className="text-2xl bg-secondary/20 w-10 h-10 flex items-center justify-center rounded-full">
                    {item.icon}
                  </span>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-xs text-foreground font-medium">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 mt-auto">
              <Button>تواصل معنا</Button>
              <Button variant="outline">تواصل معنا</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
