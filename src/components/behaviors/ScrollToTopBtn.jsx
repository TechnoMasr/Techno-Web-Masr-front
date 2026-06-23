import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ScrollToTopBtn = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 inset-e-4 z-50 p-3 rounded-full 
      bg-secondary text-primary border shadow-lg cursor-pointer
      transition-all duration-300 ease-in-out hover:scale-105 ${
        show
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      }
      `}
      aria-label={t("ScrollToTopBtn.ariaLabel")}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopBtn;
