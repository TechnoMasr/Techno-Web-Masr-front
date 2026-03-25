import logo from "@/assets/images/logo.png";
import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import HeaderActions from "./HeaderActions/HeaderActions";
import { useSelector } from "react-redux";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { lang } = useParams();
  const { settings } = useSelector((state) => state.settings);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50`}>
      <div
        className={`py-4 transition-all duration-500 ${
          scrolled
            ? "bg-primary/90 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }
        hover:bg-primary/90 hover:backdrop-blur-sm hover:shadow-lg
      `}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link to={`/${lang}`} className="w-24">
            <img
              loading="lazy"
              src={settings?.footer_logo || logo}
              alt="Logo"
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <NavBar />

          <HeaderActions />
        </div>
      </div>
    </header>
  );
};

export default Header;
