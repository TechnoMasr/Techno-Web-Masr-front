import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getHeaderMenu } from "@/api/pagesServices";

const getTranslated = (field, lang) => {
  if (field == null) return "";
  if (typeof field === "string") return field;
  return field[lang] ?? field.ar ?? field.en ?? "";
};

const getDefaultLinks = (locale) => [
  { name: "الرئيسية", href: `/${locale}`, items: [] },
  { name: "من نحن", href: `/${locale}/about`, items: [] },
  { name: "خدماتنا", href: `/${locale}/services`, items: [] },
  { name: "سابقة الأعمال", href: `/${locale}/previous-work`, items: [] },
  { name: "عمالائنا", href: `/${locale}/partners`, items: [] },
  { name: "تواصل معنا", href: `/${locale}/contact`, items: [] },
];

const useNavigationLinks = () => {
  const { lang } = useParams();
  const locale = lang || "ar";
  const [links, setLinks] = useState(() => getDefaultLinks(locale));

  useEffect(() => {
    setLinks(getDefaultLinks(locale));
    const buildLinks = (menu) => {
      const pages = menu?.pages ?? [];
      const ourService = menu?.ourService ?? [];
      const products = menu?.products ?? [];

      const servicesList = [
        {
          id: 1,
          title: "خدمات",
          href: `/${locale}/services`,
          list: ourService.map((s) => ({
            id: s.id,
            title: getTranslated(s.title, locale),
            href: `/${locale}/services/${s.slug}`,
          })),
        },
        {
          id: 2,
          title: "منتجات",
          href: `/${locale}/products`,
          list: products.map((p) => ({
            id: p.id,
            title: getTranslated(p.name, locale),
            href: `/${locale}/products/${p.slug}`,
          })),
        },
      ].filter((s) => s.list.length > 0);

      const baseLinks = [
        { name: "الرئيسية", href: `/${locale}`, items: [] },
        { name: "من نحن", href: `/${locale}/about`, items: [] },
        {
          name: "خدماتنا",
          href: `/${locale}/services`,
          items: servicesList,
        },
        { name: "سابقة الأعمال", href: `/${locale}/previous-work`, items: [] },
        { name: "عمالائنا", href: `/${locale}/partners`, items: [] },
      ];

      if (pages.length > 0) {
        const otherLinksSection = {
          id: 1,
          title: "الصفحات",
          href: `/${locale}/pages`,
          list: pages.map((p) => ({
            id: p.id,
            title: getTranslated(p.name, locale),
            href: `/${locale}/pages/${p.slug}`,
          })),
        };
        baseLinks.push({
          name: "روابط اخرى",
          href: `/${locale}/pages`,
          items: [otherLinksSection],
        });
      }

      baseLinks.push({
        name: "تواصل معنا",
        href: `/${locale}/contact`,
        items: [],
      });

      setLinks(baseLinks);
    };

    getHeaderMenu()
      .then(buildLinks)
      .catch(() => setLinks(getDefaultLinks(locale)));
  }, [lang, locale]);

  return links;
};

export default useNavigationLinks;
