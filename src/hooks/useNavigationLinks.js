import { useParams } from "react-router";

const useNavigationLinks = () => {
  const { lang } = useParams();

  const servicesList = [
    {
      id: 1,
      title: "خدمات",
      href: `/${lang}/services`,
      list: [
        {
          id: 1,
          title: "تصميم الابلكيشن",
          href: `/${lang}/services/1`,
        },
        {
          id: 2,
          title: "تصميم المواقع الالكترونية",
          href: `/${lang}/services/2`,
        },
        {
          id: 3,
          title: "تصميم المواقع الالكترونية",
          href: `/${lang}/services/3`,
        },
      ],
    },
    {
      id: 1,
      title: "منتجات",
      href: `/${lang}/products`,
      list: [
        {
          id: 1,
          title: "خدمه 1",
          href: `/${lang}/products/1`,
        },
        {
          id: 2,
          title: "خدمه 2",
          href: `/${lang}/products/2`,
        },
        {
          id: 3,
          title: "خدمه 3",
          href: `/${lang}/products/3`,
        },
      ],
    },
  ];

  const links = [
    { name: "الرئيسية", href: `/${lang}`, items: [] },
    { name: "من نحن", href: `/${lang}/about`, items: [] },
    { name: "خدماتنا", href: `/${lang}/services`, items: servicesList },
    { name: "سابقة الأعمال", href: `/${lang}/previous-work`, items: [] },
    { name: "عمالائنا", href: `/${lang}/partners`, items: [] },
    { name: "تواصل معنا", href: `/${lang}/contact`, items: [] },
  ];

  return links;
};

export default useNavigationLinks;
