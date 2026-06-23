import logo from "@/assets/images/logo.png";
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
  const portfolios = footerResponse?.portfolios ?? [];
  const pages = footerResponse?.pages ?? [];

  const formatLink = (type, value) => {
    if (!value) return null;

    if (value.startsWith("http")) return value;

    switch (type) {
      case "whatsapp":
        return `https://wa.me/${value.replace(/\s/g, "")}`;
      case "telegram":
        return `https://t.me/${value}`;
      case "tiktok":
        return `https://www.tiktok.com/@${value}`;
      case "instagram":
        return `https://instagram.com/${value}`;
      case "twitter":
        return `https://x.com/${value}`;
      default:
        return value;
    }
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: formatLink("facebook", footerData?.footer_facebook),
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: formatLink("linkedin", footerData?.footer_linkedin),
    },
    {
      name: "Twitter",
      icon: <FaXTwitter />,
      url: formatLink("twitter", footerData?.footer_x),
    },
    {
      name: "Youtube",
      icon: <FaYoutube />,
      url: formatLink("youtube", footerData?.footer_youtube),
    },
    {
      name: "Instagram",
      icon: <RiInstagramFill />,
      url: formatLink("instagram", footerData?.footer_instagram),
    },
    {
      name: "Tiktok",
      icon: <FaTiktok />,
      url: formatLink("tiktok", footerData?.footer_tiktok),
    },
    {
      name: "Telegram",
      icon: <FaTelegramPlane />,
      url: formatLink("telegram", footerData?.footer_telegram),
    },
    {
      name: "Whatsapp",
      icon: <IoLogoWhatsapp />,
      url: formatLink("whatsapp", footerData?.footer_whatsapp),
    },
  ];

  return (
    <footer
      className="sectionPadding bg-center bg-cover bg-primary relative"
      style={{
        backgroundImage: `url(${footerData?.footer_background})`,
      }}
    >
      {/* <div className="absolute inset-0 bg-primary/20" /> */}
      <div
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 
      w-[70%] h-[50%] bg-secondary/15 rounded-[50%] blur-[50px]"
      />

      <div
        className="container relative z-10 text-white
        flex flex-col lg:flex-row justify-evenly gap-8"
      >
        <div className="flex flex-col items-center text-center lg:items-start lg:text-start gap-6 lg:max-w-96">
          {footerData?.footer_logo && (
            <div className="w-32 overflow-hidden">
              <img
                loading="lazy"
                src={footerData?.footer_logo}
                alt={t("Footer.logoAlt")}
                className="w-full h-full object-contain"
              />
            </div>
          )}

          <p className="text-">
            {footerData?.footer_description_ar ??
              footerData?.footer_description_en}
          </p>

          <div className="flex items-center justify-center flex-wrap gap-6 border-t pt-4 w-full">
            {socialLinks
              .filter((link) => !!link.url)
              .map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  className="hover:text-secondary hover:border-secondary transition-colors text-2xl"
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
          <ul className="space-y-4">
            {links.map((link) => (
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

        {portfolios.length > 0 && (
          <div className="flex flex-col gap-4 min-w-1/6">
            <h3 className="text-lg lg:text-xl font-medium uppercase">
              {t("Footer.portfolios")}
            </h3>
            <ul className="space-y-4">
              {portfolios.map((item) => (
                <li key={item.id} title={item.name}>
                  <Link
                    to={`/${locale}/previous-work/${item.slug}`}
                    className="text-muted hover:text-secondary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {pages.length > 0 && (
          <div className="flex flex-col gap-4 min-w-1/6">
            <h3 className="text-lg lg:text-xl font-medium uppercase">
              {t("Footer.pages")}
            </h3>
            <ul className="space-y-4">
              {pages.map((item) => (
                <li key={item.id} title={item.name}>
                  <Link
                    to={`/${locale}/pages/${item.slug}`}
                    className="text-muted hover:text-secondary transition-colors"
                  >
                    {item.name}
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
