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
import { Link } from "react-router";
import FooterSkeleton from "@/components/Loading/SkeletonLoading/FooterSkeleton";
import useNavigationLinks from "@/hooks/useNavigationLinks";

const Footer = () => {
  const links = useNavigationLinks();

  // if (isLoading) return <FooterSkeleton />;

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "/",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "/",
    },
    { name: "Twitter", icon: <FaXTwitter />, url: "/" },
    { name: "Youtube", icon: <FaYoutube />, url: "/" },
    {
      name: "Instagram",
      icon: <RiInstagramFill />,
      url: "/",
    },
    { name: "Tiktok", icon: <FaTiktok />, url: "/" },
    {
      name: "Telegram",
      icon: <FaTelegramPlane />,
      url: "/",
    },
    {
      name: "Whatsapp",
      icon: <IoLogoWhatsapp />,
      url: "/",
    },
  ];

  return (
    <footer
      className="sectionPadding bg-center bg-cover relative"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* <div className="absolute inset-0 bg-primary/95" /> */}

      <div
        className="container relative z-10 text-white
        flex flex-col md:flex-row gap-8"
      >
        <div className="flex flex-col items-center text-center md:items-start md:text-start gap-4 md:max-w-75">
          <div className="w-26 overflow-hidden">
            <img
              loading="lazy"
              src={logo}
              alt={"logo"}
              className="w-full h-full object-contain"
            />
          </div>

          <p className="text-xs">
            نسعى إلى الإرتقاء بمستوى الجودة و الدقة لنواكب التطور التكنولوجى و
            تبسيط حلول الأعمال التقنية نسعى إلى الإرتقاء بمستوى الجودة و الدقة
            لنواكب التطور التكنولوجى
          </p>

          <div className="flex items-center justify-center flex-wrap gap-4 border-t pt-4 w-full">
            {socialLinks.map((link) => (
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
            روابط رئيسية
          </h3>
          <ul className="space-y-2">
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

        <div className="flex flex-col gap-4 min-w-1/6">
          <h3 className="text-lg lg:text-xl font-medium uppercase">
            روابط رئيسية
          </h3>
          <ul className="space-y-2">
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

        <div className="flex flex-col gap-4 min-w-1/6">
          <h3 className="text-lg lg:text-xl font-medium uppercase">
            روابط رئيسية
          </h3>
          <ul className="space-y-2">
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
      </div>
    </footer>
  );
};

export default Footer;
