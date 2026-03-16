import { useParams } from "react-router";

const useNavigationLinks = () => {
  const { lang } = useParams();

  const links = [
    { name: "الرئيسية", href: `/${lang}`, items: [] },
    { name: "من نحن", href: `/${lang}/about`, items: [] },
    { name: "خدماتنا", href: `/${lang}/services`, items: [] },
    { name: "سابقة الأعمال", href: `/${lang}/previous-work`, items: [] },
    { name: "عمالائنا", href: `/${lang}/partners`, items: [] },
    { name: "تواصل معنا", href: `/${lang}/contact`, items: [] },
  ];

  return links;
};

export default useNavigationLinks;
