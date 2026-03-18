import image from "@/assets/images/Phone.png";
import { MdSnippetFolder } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import MobileInCenterSkeleton from "../skeletons/MobileInCenterSkeleton";

const MobileInCenter = ({ block, loading }) => {
  const list = [
    {
      id: 1,
      title: "البرمجة والتطوير",
      description: "فهم مطلبات العميل بطريقة واضحة",
      icon: <MdSnippetFolder />,
    },
    {
      id: 2,
      title: "تصميم المواقع",
      description: "فهم مطلبات العميل بطريقة واضحة",
      icon: <FaPaintBrush />,
    },
    {
      id: 3,
      title: "البرمجة والتطوير",
      description: "فهم مطلبات العميل بطريقة واضحة",
      icon: <MdSnippetFolder />,
    },
    {
      id: 4,
      title: "تصميم المواقع",
      description: "فهم مطلبات العميل بطريقة واضحة",
      icon: <FaPaintBrush />,
    },
    {
      id: 5,
      title: "البرمجة والتطوير",
      description: "فهم مطلبات العميل بطريقة واضحة",
      icon: <MdSnippetFolder />,
    },
    {
      id: 6,
      title: "تصميم المواقع",
      description: "فهم مطلبات العميل بطريقة واضحة",
      icon: <FaPaintBrush />,
    },
  ];

  // Split list into left (odd indices) and right (even indices)
  const leftItems = block?.block_items?.filter((_, i) => i % 2 === 0); // index 0, 2, 4
  const rightItems = block?.block_items?.filter((_, i) => i % 2 === 1); // index 1, 3, 5

  if (loading) return <MobileInCenterSkeleton />;

  return (
    <section className="sectionPadding relative overflow-hidden" dir="rtl">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[70%] h-[80%] bg-secondary/20 rounded-full blur-[120px]" />

      <div className="container">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          {/* Left Column — 3 items */}
          <ul className="flex flex-col gap-10">
            {leftItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col items-center text-center gap-2 text-primary"
              >
                <span className="text-lg font-bold bg-secondary/30 rounded-full w-10 h-10 flex items-center justify-center">
                  <img src={item.image_url} alt="icon" className="w-5 h-5" />
                </span>
                <h3 className="font-semibold text-base">{item.title}</h3>
                <p className="text-foreground font-medium text-sm max-w-45">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          {/* Center — Phone Image */}
          <div className="flex justify-center">
            <img
              src={block?.image_url}
              alt="phone mockup"
              className="w-45 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right Column — 3 items */}
          <ul className="flex flex-col gap-10">
            {rightItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col items-center text-center gap-2 text-primary"
              >
                <span className="text-lg font-bold bg-secondary/30 rounded-full w-10 h-10 flex items-center justify-center">
                  <img src={item.image_url} alt="icon" className="w-5 h-5" />
                </span>
                <h3 className="font-semibold text-base">{item.title}</h3>
                <p className="text-foreground font-medium text-sm max-w-45">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Layout — Phone on top, items in 2-col grid below */}
        <div className="flex flex-col items-center gap-10 md:hidden">
          <img
            src={block?.image_url}
            alt="phone mockup"
            className="w-50 object-contain drop-shadow-2xl"
          />
          <ul className="grid grid-cols-2 gap-6 w-full">
            {block?.block_items?.map((item) => (
              <li
                key={item.id}
                className="flex flex-col items-center text-center gap-2 text-primary"
              >
                <span className="text-lg font-bold bg-secondary/30 rounded-full w-10 h-10 flex items-center justify-center">
                  <img src={item.image_url} alt="icon" className="w-5 h-5" />
                </span>
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-foreground font-medium text-xs">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MobileInCenter;
