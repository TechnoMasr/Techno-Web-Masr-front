import SectionTitle from "@/components/common/SectionTitle";
import { IoLanguage } from "react-icons/io5";
import image from "@/assets/images/bg-img.png";
import StatisticsSkeleton from "../skeletons/StatisticsSkeleton";

const Statistics = () => {
  const list = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    number: "+120",
    title: "علامة تجارية مسجلة",
    description:
      "احصائيات تيكنو ويب مصر في هذه احصائيات تيكنو ويب مصر في هذه الاحصائيات",
  }));

  // const loading = true;

  // if (loading) return <StatisticsSkeleton />;

  return (
    <section
      className="bg-center bg-cover relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-gray-100/90" />

      <div className="container sectionPadding relative z-10">
        <SectionTitle
          title={"احصائيات تكنو ويب مصر"}
          description={
            "تكنو ويب مصر هي شركة متخصصة في الحلول الرقمية وتصميم وتطوير المواقع الإلكترونية، المتاجر الإلكترونية، والتطبيقات، بالإضافة إلى أنظمة البرمجيات المخصصة للشركات. تهدف الشركة إلى"
          }
        />

        <ul className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {list.map((item) => (
            <li
              key={item.id}
              className="w-45 md:w-50 flex flex-col gap-2 p-3 shadow rounded-md bg-white text-primary 
              hover:bg-primary hover:text-white transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-4xl font-semibold">{item.number}</span>

                <span className="text-2xl bg-secondary/20 w-10 h-10 flex items-center justify-center rounded-full">
                  <IoLanguage />
                </span>
              </div>

              <h2 className="font-semibold">{item.title}</h2>

              <p className="text-xs font-medium opacity-70">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Statistics;
