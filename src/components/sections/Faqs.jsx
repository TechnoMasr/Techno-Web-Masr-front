import SectionTitle from "@/components/common/SectionTitle";
import image from "@/assets/images/bg-img.png";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import FaqsSkeleton from "../skeletons/FaqsSkeleton";
import { getFaq } from "@/api/mainServices";
import { useQuery } from "@tanstack/react-query";

const Faqs = ({ block, loading, imageRight, callApi = false }) => {
  const { data: faqsData, isLoading } = useQuery({
    queryKey: ["faqs" + block?.id],
    queryFn: getFaq,
    enabled: callApi || !block?.block_items?.length,
  });

  if (loading || isLoading) return <FaqsSkeleton />;

  const faqs = faqsData?.length > 0 ? faqsData || [] : block.block_items;

  return (
    <section
      className="bg-center bg-cover relative"
      style={{ backgroundImage: `url(${block.bg_image || image})` }}
    >
      <div className="absolute inset-0 bg-gray-100/90" />
      <div className="container sectionPadding relative z-10">
        <SectionTitle title={block.title} />

        <div
          className={`flex items-start gap-4 lg:gap-8 ${imageRight && "flex-row-reverse"}`}
        >
          <div className="flex-1 max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs?.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={`item-${item.id}`}
                  className={` bg-gray-200 rounded-lg`}
                >
                  <AccordionTrigger className="text-black p-2 py-4 font-semibold cursor-pointer">
                    {item.title || item.question}
                  </AccordionTrigger>

                  <AccordionContent className="text-muted-foreground p-2 font-medium">
                    {item.description || item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="w-1/3 aspect-4/3 hidden lg:block rounded-2xl shadow overflow-hidden">
            <img
              loading="lazy"
              src={block.image_url}
              alt="faq"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
