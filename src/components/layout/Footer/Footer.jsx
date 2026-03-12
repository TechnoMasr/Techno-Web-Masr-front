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

      <div className="container relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-48 overflow-hidden">
            <img
              loading="lazy"
              src={logo}
              alt={"logo"}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-sm">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <h3 className="text-xl lg:text-2xl font-medium uppercase">links</h3>
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

        <div className="flex flex-col items-center gap-4 text-center">
          <h3 className="text-xl lg:text-2xl font-medium uppercase">
            social media
          </h3>
          <div className="grid grid-cols-4 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                className="hover:text-secondary hover:border-secondary transition-colors p-1 border rounded text-xl"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
