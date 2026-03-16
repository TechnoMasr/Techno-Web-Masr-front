import TitleAndDescription from "@/components/common/TitleAndDescription";
import PageBanner from "@/components/commonSections/PageBanner";
import StartWithUsBanner from "@/components/commonSections/StartWithUsBanner";
import TestimonialsSection from "@/components/commonSections/TestimonialsSection";
import InfoCard from "./sections/InfoCard";
import GallerySection from "./sections/GallerySection";

const PreviousWorkDetails = () => {
  return (
    <main>
      <PageBanner title={"سابقة الأعمال"} />

      <article className="pagePadding">
        <section className="container sectionPadding flex flex-col-reverse md:flex-row gap-6 lg:gap-12">
          <TitleAndDescription
            title={`تفاصيل المشروع`}
            description={`تكنو ويب مصر هي شركة متخصصة في الحلول الرقمية وتصميم وتطوير الــمـــواقـــع الإلــكــتــرونـيـة، المـتـاجـر الإلكـتـرونـيـة، والتـطبيقات، بالإضافة إلى أنــظــمــة الــبــرمجــيــات المــخــصصــة لـلـشركــات. تــهدف الشركة إلى تمكين الأعــمــال من التــحول الرقــمي مــن خـــلال تــقــديم حــلــول مـبـتكرة تجمع بين التصميم الاحترافي، الأداء التقني العالي، وتجربة المستخدم المتطورة. تكنو ويب مصر هي شركة متخصصة في الحلول الرقمية وتصميم وتطوير الــمـــواقـــع الإلــكــتــرونـيـة، المـتـاجـر الإلكـتـرونـيـة، والتـطبيقات، بالإضافة إلى أنــظــمــة الــبــرمجــيــات المــخــصصــة لـلـشركــات. تــهدف الشركة إلى تمكين الأعــمــال من التــحول الرقــمي مــن خـــلال تــقــديم حــلــول مـبـتكرة تجمع بين التصميم الاحترافي، الأداء التقني العالي، وتجربة المستخدم المتطورة. تكنو ويب مصر هي شركة متخصصة في الحلول الرقمية وتصميم وتطوير الــمـــواقـــع الإلــكــتــرونـيـة، المـتـاجـر الإلكـتـرونـيـة، والتـطبيقات، بالإضافة إلى أنــظــمــة الــبــرمجــيــات المــخــصصــة لـلـشركــات. تــهدف الشركة إلى تمكين الأعــمــال من التــحول الرقــمي مــن خـــلال تــقــديم حــلــول مـبـتكرة تجمع بين التصميم الاحترافي، الأداء التقني العالي،`}
            className="flex-1"
          />

          <InfoCard />
        </section>

        <GallerySection />

        <StartWithUsBanner />
        <TestimonialsSection />
      </article>
    </main>
  );
};

export default PreviousWorkDetails;
