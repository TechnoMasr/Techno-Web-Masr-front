import { createPortal } from "react-dom";
import { IoClose, IoArrowBack } from "react-icons/io5";
import { NavLink, useParams } from "react-router";
import { useState } from "react";
import useNavigationLinks from "@/hooks/useNavigationLinks";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/store/modals/modalsSlice";
import { useTranslation } from "react-i18next";

const MobileNav = () => {
  const { t } = useTranslation();
  const { modalName } = useSelector((state) => state.modals);
  const open = modalName === "mobileNav";

  const dispatch = useDispatch();
  const links = useNavigationLinks();

  const [activeMenu, setActiveMenu] = useState(null);

  const closeOnLinkClick = () => {
    dispatch(closeModal());
    setActiveMenu(null);
  };

  const { lang } = useParams();
  const locale = lang || "ar";

  const isExact = (href) => href === `/${locale}`;

  return createPortal(
    <div
      className={`lg:hidden fixed inset-0 z-50 bg-primary overflow-y-auto
      transition-all duration-400 ease-in-out
      ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`}
    >
      {/* close */}
      <button
        onClick={closeOnLinkClick}
        className="absolute top-8 inset-e-4 text-primary bg-white
        w-8 h-8 rounded-full flex items-center justify-center text-xl cursor-pointer"
      >
        <IoClose />
      </button>

      <nav className="h-full flex flex-col justify-center items-center gap-6 px-6">
        {/* 🔙 Back button */}
        {activeMenu && (
          <button
            onClick={() => setActiveMenu(null)}
            className="flex items-center gap-2 text-white mb-4"
          >
            <IoArrowBack />
            {t("back")}
          </button>
        )}

        {/* 🧭 MAIN MENU */}
        {!activeMenu &&
          links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={isExact(link.href)} // ✅ حل المشكلة
              onClick={() => {
                if (link.items?.length) {
                  setActiveMenu(link);
                } else {
                  closeOnLinkClick();
                }
              }}
              className={({ isActive }) =>
                `nav_link text-lg w-fit mx-auto block ${
                  isActive ? "text-secondary" : "text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

        {/* 📂 SUB MENU */}
        {activeMenu &&
          activeMenu.items.map((section) => (
            <div key={section.id} className="text-center">
              <NavLink
                onClick={closeOnLinkClick}
                to={section.href}
                className="text-white font-semibold mb-2 block"
              >
                {section.title}
              </NavLink>

              {section.list.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.href}
                  onClick={closeOnLinkClick}
                  className={({ isActive }) =>
                    `block py-1 ${
                      isActive ? "text-secondary" : "text-white/80"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          ))}
      </nav>
    </div>,
    document.body,
  );
};

export default MobileNav;
