import PageBanner from "@/components/sections/PageBanner";
import WhyChooseAiTools from "./section/WhyChooseAiTools";
import AiToolsCards from "./section/AiToolsCards";

const AiTools = () => {
  return (
    <main className="bg-slate-50">
      <PageBanner
        title={"أدوات الذكاء الاصطناعي"}
        description={
          "اكتشف مجموعة شاملة من أفضل أدوات الذكاء الاصطناعي مع مراجعات متخصصة ومقارنات تفصيلية لمساعدتك في اختيار الأداة المناسبة."
        }
      />

      <div className="container pagePadding space-y-8 lg:space-y-16">
        <AiToolsCards />
        <WhyChooseAiTools />
      </div>
    </main>
  );
};

export default AiTools;
