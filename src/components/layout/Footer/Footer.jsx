import logo from "@/assets/images/logo.png";
import bgImg from "@/assets/images/bg-img.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Link, useParams } from "react-router";
import useNavigationLinks from "@/hooks/useNavigationLinks";
import { getFooter } from "@/api/mainServices";
import { useQuery } from "@tanstack/react-query";
import FooterSkeleton from "@/components/skeletons/FooterSkeleton";
import { useTranslation } from "react-i18next";

const getTranslated = (field, lang) => {
  if (field == null) return "";
  if (typeof field === "string") return field;
  return field[lang] ?? field.ar ?? field.en ?? "";
};

const Footer = () => {
  const { t } = useTranslation();

  const { lang } = useParams();
  const locale = lang || "ar";
  const links = useNavigationLinks();

  const { data: footerResponse, isLoading } = useQuery({
    queryKey: ["footer", locale],
    queryFn: getFooter,
  });

  if (isLoading) return <FooterSkeleton />;

  const footerData = footerResponse?.footerData ?? footerResponse ?? {};
  const ourService = footerResponse?.ourService ?? [];
  const products = footerResponse?.products ?? [];
  const pages = footerResponse?.pages ?? [];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: footerData?.footer_facebook,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: footerData?.footer_linkedin,
    },
    { name: "Twitter", icon: <FaXTwitter />, url: footerData?.footer_x },
    {
      name: "Youtube",
      icon: <FaYoutube />,
      url: footerData?.footer_youtube,
    },
    {
      name: "Instagram",
      icon: <RiInstagramFill />,
      url: footerData?.footer_instagram,
    },
    {
      name: "Tiktok",
      icon: <FaTiktok />,
      url: footerData?.footer_tiktok,
    },
    {
      name: "Telegram",
      icon: <FaTelegramPlane />,
      url: footerData?.footer_telegram,
    },
    {
      name: "Whatsapp",
      icon: <IoLogoWhatsapp />,
      url: footerData?.footer_whatsapp,
    },
  ];

  return (
    <footer
      className="sectionPadding bg-center bg-cover bg-primary relative"
      style={{
        backgroundImage: `url(${footerData?.footer_background || bgImg})`,
      }}
    >
      {/* <div className="absolute inset-0 bg-primary/20" /> */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[70%] h-[50%] bg-secondary/10 rounded-[50%] blur-[50px]" />

      <div
        className="container relative z-10 text-white
        flex flex-col md:flex-row justify-between gap-8"
      >
        <div className="flex flex-col items-center text-center md:items-start md:text-start gap-4 md:max-w-75">
          <div className="w-26 overflow-hidden">
            <img
              loading="lazy"
              src={footerData?.footer_logo || logo}
              alt={"logo"}
              className="w-full h-full object-contain"
            />
          </div>

          <p className="text-xs">
            {footerData?.footer_description_ar ??
              footerData?.footer_description_en}
          </p>

          <div className="flex items-center justify-center flex-wrap gap-4 border-t pt-4 w-full">
            {socialLinks
              .filter((link) => link.url)
              .map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  className="hover:text-secondary hover:border-secondary transition-colors text-xl"
                >
                  {link.icon}
                </a>
              ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 min-w-1/6">
          <h3 className="text-lg lg:text-xl font-medium uppercase">
            {t("Footer.mainLinks")}
          </h3>
          <ul className="space-y-2">
            {links
              .filter((link) => !link.items?.length)
              .map((link) => (
                <li key={link.name} title={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 min-w-1/6">
          <h3 className="text-lg lg:text-xl font-medium uppercase">
            {t("Footer.services")}
          </h3>
          <ul className="space-y-2">
            {ourService.map((item) => (
              <li key={item.id} title={getTranslated(item.title, locale)}>
                <Link
                  to={`/${locale}/services/${item.slug}`}
                  className="text-muted hover:text-secondary transition-colors"
                >
                  {getTranslated(item.title, locale)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 min-w-1/6">
          <h3 className="text-lg lg:text-xl font-medium uppercase">
            {t("Footer.products")}
          </h3>
          <ul className="space-y-2">
            {products.map((item) => (
              <li key={item.id} title={getTranslated(item.name, locale)}>
                <Link
                  to={`/${locale}/products/${item.slug}`}
                  className="text-muted hover:text-secondary transition-colors"
                >
                  {getTranslated(item.name, locale)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {pages.length > 0 && (
          <div className="flex flex-col gap-4 min-w-1/6">
            <h3 className="text-lg lg:text-xl font-medium uppercase">
              {t("Footer.pages")}
            </h3>
            <ul className="space-y-2">
              {pages.map((item) => (
                <li key={item.id} title={getTranslated(item.name, locale)}>
                  <Link
                    to={`/${locale}/pages/${item.slug}`}
                    className="text-muted hover:text-secondary transition-colors"
                  >
                    {getTranslated(item.name, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
