import { openModal } from "@/store/modals/modalsSlice";
import { IoLanguage } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";

const LanguageSwitcher = () => {
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
        {lang === "en" ? "AR" : "EN"}
      </span>
      <span className="font-medium text-sm hidden sm:inline">
        {lang === "en" ? "العربية" : "English"}
      </span>
      <IoLanguage />
    </button>
  );
};

export default LanguageSwitcher;
