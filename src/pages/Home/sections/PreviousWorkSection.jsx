import PreviousWorkCard from "@/components/cards/PreviousWorkCard";
import SectionTitle from "@/components/common/SectionTitle";
import MainSlider from "@/components/commonSections/MainSlider";
import image from "@/assets/images/bg-img.png";

const PreviousWorkSection = () => {
  const projects = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    image: image,
    title: "تصميم الابلكيشن",
    description:
      "تكنو ويب مصر هي شركة متخصصة في الحلول الرقمية وتصميم وتطوير  شركة متخصصة في الحلول الرقمية وتصميم وتطوير ",
  }));

  return (
    <section>
      <div className="container sectionPadding">
        <SectionTitle
          title={"سابقة اعمال تكنو ويب مصر"}
          description={
            "تكنو ويب مصر هي شركة متخصصة في الحلول الرقمية وتصميم وتطوير المواقع الإلكترونية،"
          }
          link={{
            href: "/portfolio",
            text: "عرض جميع الاعمال",
          }}
        />

        <MainSlider
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 1.3 },
            570: { slidesPerView: 2.6 },
            640: { slidesPerView: 3 },
            // 780: { slidesPerView: 3.5 },
            960: { slidesPerView: 4 },
          }}
          data={projects || []}
          renderItem={(project) => (
            <PreviousWorkCard key={project.id} item={project} />
          )}
        />
      </div>
    </section>
  );
};

export default PreviousWorkSection;
