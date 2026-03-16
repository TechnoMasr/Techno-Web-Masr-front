import image from "@/assets/images/bg-img.png";
import PreviousWorkCard from "@/components/cards/PreviousWorkCard";
import PageBanner from "@/components/commonSections/PageBanner";

const PreviousWork = () => {
  const list = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    image: image,
    title: "تصميم الابلكيشن",
    description:
      "تكنو ويب مصر هي شركة متخصصة في الحلول الرقمية وتصميم وتطوير  شركة متخصصة في الحلول الرقمية وتصميم وتطوير ",
  }));

  return (
    <main>
      <PageBanner title={"سابقة الأعمال"} />

      <section className="container pagePadding">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {list.map((item) => (
            <PreviousWorkCard key={item.id} item={item} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default PreviousWork;
