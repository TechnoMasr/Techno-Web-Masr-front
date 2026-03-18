import image from "@/assets/images/Device - Macbook Pro.png";
import TitleAndDescription from "../common/TitleAndDescription";
import { Button } from "../ui/button";
import TextAndImageSkeleton from "../skeletons/TextAndImageSkeleton";

const TextAndImage = ({
  backgroundImage = null,
  yellowCircle = false,
  imageFirst = false,
}) => {

  // const loading = true;

  // if (loading) return <TextAndImageSkeleton />;

  return (
    <section
      className={`sectionPadding relative ${backgroundImage ? "bg-cover bg-center bg-no-repeat my-10" : ""}`}
      style={{
        background: backgroundImage && `url(${backgroundImage})`,
      }}
    >
      {yellowCircle && (
        <div className="absolute top-1/2 inset-s-0 -translate-y-1/2 -z-10 w-[80%] h-full bg-secondary/20 rounded-full blur-[120px]" />
      )}

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 relative z-10">
        <div className={`${imageFirst ? "md:order-2" : ""}`}>
          <TitleAndDescription
            textColor={backgroundImage ? "text-white!" : ""}
            title={
              "تعرف علي بعض التفاصيل عن شركتنا  وسبب نجاحنا في جميع الاسواق التي نعمل بها الان"
            }
            description={`تكنو ويب مصر هي شركة متخصصة في الحلول الرقمية وتصميم وتطوير الــمـــواقـــع الإلــكــتــرونـيـة، المـتـاجـر الإلكـتـرونـيـة، والتـطبيقات، بالإضافة إلى أنــظــمــة الــبــرمجــيــات المــخــصصــة لـلـشركــات. تــهدف الشركة إلى تمكين الأعــمــال من التــحول الرقــمي مــن خـــلال تــقــديم حــلــول مـبـتكرة تجمع بين التصميم الاحترافي، الأداء التقني العالي، وتجربة المستخدم المتطورة.
            تكنو ويب مصر هي شركة متخصصة في الحلول الرقمية وتصميم وتطوير الــمـــواقـــع الإلــكــتــرونـيـة، المـتـاجـر الإلكـتـرونـيـة، والتـطبيقات، بالإضافة إلى أنــظــمــة الــبــرمجــيــات المــخــصصــة لـلـشركــات. تــهدف الشركة إلى تمكين الأعــمــال من التــحول الرقــمي مــن خـــلال تــقــديم حــلــول مـبـتكرة تجمع بين التصميم الاحترافي، الأداء التقني العالي، وتجربة المستخدم المتطورة.
            `}
          />

          <Button
            variant={backgroundImage ? "secondary" : "default"}
            className={`${backgroundImage ? "bg-white" : ""} lg:mt-8`}
          >
            اطلب الخدمه
          </Button>
        </div>

        <div
          className={`w-full h-100 hidden md:block ${imageFirst ? "md:order-1" : ""}`}
        >
          <img
            src={image}
            alt="image"
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default TextAndImage;
