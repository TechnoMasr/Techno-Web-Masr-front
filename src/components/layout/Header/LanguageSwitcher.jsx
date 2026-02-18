import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../../store/languageSlice/languageSlice";
import LoadingModal from "../../Loading/LoadingModal";
import { RiGlobalLine } from "react-icons/ri";

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const { lang } = useSelector((state) => state.language);

  const [openLoading, setOpenLoading] = useState(false);

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const handleToggle = () => {
    dispatch(changeLanguage(lang === "ar" ? "en" : "ar"));
    setOpenLoading(true);
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className="flex items-center justify-center gap-1 text-primary border shadow shadow-primary/50 py-2 px-2 rounded-full cursor-pointer"
      >
        <span className="font-semibold mt-1 leading-0">
          {lang === "en" ? "العربية" : "English"}
        </span>
        <RiGlobalLine />
      </button>

      {openLoading && <LoadingModal />}
    </>
  );
};

export default LanguageSwitcher;
