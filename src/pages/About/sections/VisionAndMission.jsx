import SectionTitle from "@/components/common/SectionTitle";
import { LuNetwork } from "react-icons/lu";
import { GoGoal } from "react-icons/go";
import { BiChalkboard } from "react-icons/bi";

const VisionAndMission = () => {
  const list = [
    {
      id: 1,
      title: "مهمتنا",
      description:
        "تمكين الشركات من التحول الرقمي عبر تقديم حلول تقنية مبتكرة تجمع بين التصميم الاحترافي والأداء القوي، مع بناء شراكات طويلة الأمد قائمة على الجودة والثقة.",
      icon: <LuNetwork />,
    },
    {
      id: 2,
      title: "رسالتنا",
      description:
        "تقديم خدمات رقمية عالية الجودة تركز على تجربة المستخدم والكفاءة، وتحويل أفكار عملائنا إلى حلول عملية قابلة للنمو والتوسع تقديم حلول رقمية فعّالة تدعم نمو العملاء",
      icon: <BiChalkboard />,
    },
    {
      id: 3,
      title: "أهدافنا",
      description:
        "تقديم حلول رقمية فعّالة تدعم نمو العملاء و تحسين تجربة المستخدم وزيادة معدلات التحويل و الالتزام بالجودة والاحترافية في كل مشروع مواكبة أحدث التقنيات لضمان التطوير المستمر",
      icon: <GoGoal />,
    },
  ];

  return (
    <section className="container sectionPadding">
      <SectionTitle title={"تعرف علي رؤية تكنو ويب مصر"} />

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {list.map((item) => (
          <li
            key={item.id}
            className="flex flex-col gap-2 bg-white text-primary shadow rounded-xl border p-3"
          >
            <span className="text-3xl">{item.icon}</span>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-xs font-medium">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default VisionAndMission;
