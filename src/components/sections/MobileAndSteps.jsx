import TitleAndDescription from "../common/TitleAndDescription";
import image from "@/assets/images/Phone.png";
import { Button } from "../ui/button";
import MobileAndStepsSkeleton from "../skeletons/MobileAndStepsSkeleton";

const MobileAndSteps = () => {
  const steps = Array.from({ length: 4 }).map((_, i) => ({
    id: i + 1,
    title: "البرمجة والتطوير",
    description: "فهم مطلبات العميل بطريقة واضحة",
  }));

  // const loading = true;

  // if (loading) return <MobileAndStepsSkeleton />;

  return (
    <section className={`sectionPadding relative`}>
      <div className="absolute top-1/2 inset-s-0 -translate-y-1/2 -z-10 w-[80%] h-full bg-secondary/20 rounded-full blur-[120px]" />

      <div className="container grid grid-cols-1 md:grid-cols-5 gap-16 relative z-10">
        <div className={`space-y-4 lg:space-y-12 md:col-span-3`}>
          <TitleAndDescription
            title={"خصائص المنتج"}
            description={`تكنو ويب مصر هي شركة متخصصة في الحلول الرقمية وتصميم وتطوير المواقع الإلكترونية، المتاجر الإلكترونية، والتطبيقات، بالإضافة إلى أنظمة البرمجيات المخصصة للشركات. تهدف الشركة إلى`}
          />

          <ul className="grid grid-cols-2 gap-4">
            {steps.map((step, index) => (
              <li
                key={step.id}
                className="flex flex-col items-center text-center gap-2 border rounded-md text-primary p-4"
              >
                <span className="text-lg font-bold border-2 border-secondary rounded-full w-10 h-10 flex items-center justify-center">
                  {index + 1}
                </span>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-foreground font-medium text-sm">
                  {step.description}
                </p>
              </li>
            ))}
          </ul>

          <Button className={`mx-auto block md:me-auto md:ms-0`}>
            اطلب الخدمه
          </Button>
        </div>

        <div className={`w-full h-125 hidden md:block md:col-span-2`}>
          <img
            src={image}
            alt="image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileAndSteps;
