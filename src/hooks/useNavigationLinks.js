import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { getHeaderMenu } from "@/api/pagesServices";
import { useQuery } from "@tanstack/react-query";

const useNavigationLinks = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const locale = lang || "ar";

  const { data: menu } = useQuery({
    queryKey: ["menu", locale],
    queryFn: getHeaderMenu,
  });

  const ourService = menu?.ourService ?? [];
  const products = menu?.products ?? [];

  const servicesList = [
    {
      id: 1,
      title: t("Header.services"),
      href: `/${locale}/services`,
      list: ourService.map((s) => ({
        id: s.id,
        title: s.title,
        href: `/${locale}/services/${s.slug}`,
      })),
    },
    {
      id: 2,
      title: t("Header.products"),
      href: `/${locale}/products`,
      list: products.map((p) => ({
        id: p.id,
        title: p.name,
        href: `/${locale}/products/${p.slug}`,
      })),
    },
  ].filter((s) => s.list.length > 0);

  const links = [
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
    { name: t("Header.blog"), href: `/${locale}/blog`, items: [] },
    { name: t("Header.aiTools"), href: `/${locale}/ai-tools`, items: [] },
    { name: t("Header.contact"), href: `/${locale}/contact`, items: [] },
  ];

  return links;
};

export default useNavigationLinks;
