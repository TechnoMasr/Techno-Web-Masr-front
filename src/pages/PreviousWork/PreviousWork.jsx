import image from "@/assets/images/bg-img.png";
import PreviousWorkCard from "@/components/cards/PreviousWorkCard";
import PageBanner from "@/components/commonSections/PageBanner";
import { useState } from "react";

const PreviousWork = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const list = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    image: image,
    title: "تصميم الابلكيشن",
    description:
      "تكنو ويب مصر هي شركة متخصصة في الحلول الرقمية وتصميم وتطوير  شركة متخصصة في الحلول الرقمية وتصميم وتطوير ",
  }));

  const categories = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    title: "ويب",
  }));

  return (
    <main>
      <PageBanner title={"سابقة الأعمال"} />

      <section className="container pagePadding space-y-4 lg:space-y-8">
        <ul className="flex items-center flex-wrap gap-3">
          {categories.map((item) => {
            const isActive = selectedCategory === item.id;

            return (
              <li
                key={item.id}
                onClick={() => setSelectedCategory(item.id)}
                className={`
          relative px-5 py-2 rounded-xl text-sm font-medium cursor-pointer
          transition-all duration-300 ease-in-out
          border
          ${
            isActive
              ? "bg-primary text-white border-primary shadow-md scale-105"
              : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary hover:bg-primary/5"
          }
        `}
              >
                {item.title}

                {/* Active underline */}
                {isActive && (
                  <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-8 h-1 bg-white rounded-full" />
                )}
              </li>
            );
          })}
        </ul>

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
