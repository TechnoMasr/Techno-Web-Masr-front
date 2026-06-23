import { openModal } from "@/store/modals/modalsSlice";
import { IoLanguage } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams();

  const dispatch = useDispatch();

  const toggleLang = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    const newPath = location.pathname.replace(`/${lang}`, `/${newLang}`);

    navigate(newPath);

    dispatch(openModal({ modalName: "loadingModal" }));

    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1 text-white border px-2 py-1 rounded-md cursor-pointer 
        hover:text-secondary hover:border-secondary transition-colors duration-300"
    >
      <span className="font-medium text-sm sm:hidden">
        {lang === "en" ? t("LanguageSwitcher.arShort") : t("LanguageSwitcher.enShort")}
      </span>
      <span className="font-medium text-sm hidden sm:inline">
        {lang === "en" ? t("LanguageSwitcher.arFull") : t("LanguageSwitcher.enFull")}
      </span>
      <IoLanguage />
    </button>
  );
};

export default LanguageSwitcher;
