import TitleAndDescription from "../common/TitleAndDescription";
import TitleAndStepsSkeleton from "../skeletons/TitleAndStepsSkeleton";
import { Button } from "../ui/button";

const TitleAndSteps = () => {
  const steps = Array.from({ length: 4 }).map((_, i) => ({
    id: i + 1,
    title: "البرمجة والتطوير",
    description: "فهم مطلبات العميل بطريقة واضحة",
  }));

  // const loading = true;

  // if (loading) return <TitleAndStepsSkeleton />;

  return (
    <section className={`sectionPadding`}>
      <div className="container space-y-8">
        <TitleAndDescription
          className={"max-w-3xl"}
          title={"خصائص المنتج"}
          description={`تكنو ويب مصر هي شركة متخصصة في الحلول الرقمية وتصميم وتطوير المواقع الإلكترونية، المتاجر الإلكترونية، والتطبيقات، بالإضافة إلى أنظمة البرمجيات المخصصة للشركات. تهدف الشركة إلى`}
        />

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

        <Button className={`mx-auto block`}>اطلب الخدمه</Button>
      </div>
    </section>
  );
};

export default TitleAndSteps;
