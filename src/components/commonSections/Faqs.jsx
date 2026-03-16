import SectionTitle from "@/components/common/SectionTitle";
import image from "@/assets/images/bg-img.png";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const Faqs = () => {
  const list = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    question: "ما هي الخدمات التي تقدمها تكنو ويب مصر؟",
    answer: "نقدم خدمات تصميم وتطوير المواقع والتطبيقات والتسويق الإلكتروني.",
  }));

  return (
    <section
      className="bg-center bg-cover relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-gray-100/90" />

      <div className="container sectionPadding relative z-10">
        <SectionTitle title={"الأسئلة الشائعة"} />

        <div className="flex items-start gap-8">
          <div className="flex-1">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {list.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={`item-${item.id}`}
                  className={`bg-gray-50 rounded-lg`}
                >
                  <AccordionTrigger className="bg-gray-200 p-2 py-4 font-semibold cursor-pointer">
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent className="text-muted-foreground p-2 font-medium">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="w-1/3 aspect-4/3 hidden md:block rounded-2xl shadow overflow-hidden">
            <img src={image} alt="faq" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
