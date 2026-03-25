import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getHeaderMenu } from "@/api/pagesServices";
import { useTranslation } from "react-i18next";

const getTranslated = (field, lang) => {
  if (field == null) return "";
  if (typeof field === "string") return field;
  return field[lang] ?? field.ar ?? field.en ?? "";
};

// ✅ بنبني الـ links بـ translation keys مش بـ translated strings
const buildLinksFromMenu = (menu, locale) => {
  const pages = menu?.pages ?? [];
  const ourService = menu?.ourService ?? [];
  const products = menu?.products ?? [];

  const servicesList = [
    {
      id: 1,
      titleKey: "Header.services",
      href: `/${locale}/services`,
      list: ourService.map((s) => ({
        id: s.id,
        title: getTranslated(s.title, locale),
        href: `/${locale}/services/${s.slug}`,
      })),
    },
    {
      id: 2,
      titleKey: "Header.products",
      href: `/${locale}/products`,
      list: products.map((p) => ({
        id: p.id,
        title: getTranslated(p.name, locale),
        href: `/${locale}/products/${p.slug}`,
      })),
    },
  ].filter((s) => s.list.length > 0);

  const baseLinks = [
    { nameKey: "Header.home", href: `/${locale}`, items: [] },
    { nameKey: "Header.about", href: `/${locale}/about`, items: [] },
    {
      nameKey: "Header.services",
      href: `/${locale}/services`,
      items: servicesList,
    },
    {
      nameKey: "Header.previousWork",
      href: `/${locale}/previous-work`,
      items: [],
    },
    { nameKey: "Header.partners", href: `/${locale}/partners`, items: [] },
  ];

  if (pages.length > 0) {
    baseLinks.push({
      nameKey: "Header.otherLinks",
      href: `/${locale}/pages`,
      items: [
        {
          id: 1,
          titleKey: "Header.pages",
          href: `/${locale}/pages`,
          list: pages.map((p) => ({
            id: p.id,
            title: getTranslated(p.name, locale),
            href: `/${locale}/pages/${p.slug}`,
          })),
        },
      ],
    });
  }

  baseLinks.push({
    nameKey: "Header.contact",
    href: `/${locale}/contact`,
    items: [],
  });

  return baseLinks;
};

const getDefaultLinks = (locale) => [
  { nameKey: "Header.home", href: `/${locale}`, items: [] },
  { nameKey: "Header.about", href: `/${locale}/about`, items: [] },
  { nameKey: "Header.services", href: `/${locale}/services`, items: [] },
  {
    nameKey: "Header.previousWork",
    href: `/${locale}/previous-work`,
    items: [],
  },
  { nameKey: "Header.partners", href: `/${locale}/partners`, items: [] },
  { nameKey: "Header.contact", href: `/${locale}/contact`, items: [] },
];

const useNavigationLinks = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const locale = lang || "ar";

  const [rawLinks, setRawLinks] = useState(() => getDefaultLinks(locale));

  useEffect(() => {
    setRawLinks(getDefaultLinks(locale));

    getHeaderMenu()
      .then((menu) => setRawLinks(buildLinksFromMenu(menu, locale)))
      .catch(() => setRawLinks(getDefaultLinks(locale)));
  }, [locale]); // ✅ مش محتاجين t هنا خالص

  // ✅ الترجمة بتحصل هنا — وقت الـ render، مع أحدث نسخة من t
  return rawLinks.map((link) => ({
    ...link,
    name: t(link.nameKey),
    items: link.items.map((section) => ({
      ...section,
      title: section.titleKey ? t(section.titleKey) : section.title,
    })),
  }));
};

export default useNavigationLinks;
