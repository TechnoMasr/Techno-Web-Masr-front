import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AiFillHome } from "react-icons/ai";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-4">
      <h1 className="text-[120px] font-bold leading-20 text-myGold">404</h1>
      <h2 className="text-2xl font-bold">{t("NotFound.title")}</h2>
      <Link to="/" replace className="mainBtn">
        {t("NotFound.goHome")}
        <AiFillHome />
      </Link>
    </section>
  );
};

export default NotFound;
