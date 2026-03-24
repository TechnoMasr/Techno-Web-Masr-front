import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getHeaderMenu } from "@/api/pagesServices";
import { useTranslation } from "react-i18next";

const useNavigationLinks = () => {
  const { t } = useTranslation();

  const getTranslated = (field, lang) => {
    if (field == null) return "";
    if (typeof field === "string") return field;
    return field[lang] ?? field.ar ?? field.en ?? "";
  };

  const getDefaultLinks = (locale) => [
    { name: t("Header.home"), href: `/${locale}`, items: [] },
    { name: t("Header.about"), href: `/${locale}/about`, items: [] },
    { name: t("Header.services"), href: `/${locale}/services`, items: [] },
    {
      name: t("Header.previousWork"),
      href: `/${locale}/previous-work`,
      items: [],
    },
    { name: t("Header.partners"), href: `/${locale}/partners`, items: [] },
    { name: t("Header.contact"), href: `/${locale}/contact`, items: [] },
  ];

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
          title: t("Header.services"),
          href: `/${locale}/services`,
          list: ourService.map((s) => ({
            id: s.id,
            title: getTranslated(s.title, locale),
            href: `/${locale}/services/${s.slug}`,
          })),
        },
        {
          id: 2,
          title: t("Header.products"),
          href: `/${locale}/products`,
          list: products.map((p) => ({
            id: p.id,
            title: getTranslated(p.name, locale),
            href: `/${locale}/products/${p.slug}`,
          })),
        },
      ].filter((s) => s.list.length > 0);

      const baseLinks = [
        { name: t("Header.home"), href: `/${locale}`, items: [] },
        { name: t("Header.about"), href: `/${locale}/about`, items: [] },
        {
          name: t("Header.services"),
          href: `/${locale}/services`,
          items: servicesList,
        },
        {
          name: t("Header.previousWork"),
          href: `/${locale}/previous-work`,
          items: [],
        },
        { name: t("Header.partners"), href: `/${locale}/partners`, items: [] },
      ];

      if (pages.length > 0) {
        const otherLinksSection = {
          id: 1,
          title: t("Header.pages"),
          href: `/${locale}/pages`,
          list: pages.map((p) => ({
            id: p.id,
            title: getTranslated(p.name, locale),
            href: `/${locale}/pages/${p.slug}`,
          })),
        };
        baseLinks.push({
          name: t("Header.otherLinks"),
          href: `/${locale}/pages`,
          items: [otherLinksSection],
        });
      }

      baseLinks.push({
        name: t("Header.contact"),
        href: `/${locale}/contact`,
        items: [],
      });

      setLinks(baseLinks);
    };

    getHeaderMenu()
      .then(buildLinks)
      .catch(() => setLinks(getDefaultLinks(locale)));
  }, [lang, locale, t]);

  return links;
};

export default useNavigationLinks;
