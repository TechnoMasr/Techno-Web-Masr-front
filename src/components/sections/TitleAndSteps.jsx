import TitleAndDescription from "../common/TitleAndDescription";
import TitleAndStepsSkeleton from "../skeletons/TitleAndStepsSkeleton";
import { Button } from "../ui/button";

const TitleAndSteps = ({ block }) => {
  console.log("block", block);

  return (
    <section className={`sectionPadding`}>
      <div className="container space-y-8">
        <TitleAndDescription
          className={"max-w-3xl"}
          title={block.title}
          description={block.description}
        />

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {block.block_items.map((step, index) => (
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
