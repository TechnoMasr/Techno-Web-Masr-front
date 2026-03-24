import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import whatsapp_icon from "@/assets/icons/whatsapp_icon.png";
import phone_icon from "@/assets/icons/phone_icon.png";

const FixedSection = () => {
  const { settings } = useSelector((state) => state.settings);
  const { t } = useTranslation();

  const list = [
    {
      id: 1,
      title: t("whatsapp"),
      link: `https://wa.me/${(settings?.footer_whatsapp || "").replace(/\s/g, "")}`,
      icon: whatsapp_icon,
    },
    {
      id: 2,
      title: t("phone"),
      link: `tel:${(settings?.footer_phone || "").replace(/\s/g, "")}`,
      icon: phone_icon,
    },
  ];

  return (
    <section className="fixed inset-e-2 bottom-1/6 z-40">
      <div className="flex flex-col items-end gap-4">
        {list.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            className="shadow-md shadow-myGold/20 transition-transform hover:scale-110"
          >
            <img src={item.icon} alt={item.title} className="w-10 h-10" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default FixedSection;
