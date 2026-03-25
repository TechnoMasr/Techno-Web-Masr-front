import { createPortal } from "react-dom";
import { IoClose, IoArrowBack, IoChevronForward } from "react-icons/io5";
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
  const isRTL = locale === "ar";

  const isExact = (href) => href === `/${locale}`;

  return createPortal(
    <div
      className={`lg:hidden fixed inset-0 z-50 bg-primary overflow-hidden
        transition-all duration-400 ease-in-out
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`}
    >
      {/* Close button */}
      <button
        onClick={closeOnLinkClick}
        className="absolute top-8 inset-e-4 text-primary bg-white
          w-8 h-8 rounded-full flex items-center justify-center text-xl cursor-pointer z-10"
      >
        <IoClose />
      </button>

      {/* Sliding wrapper — holds main + sub side by side */}
      <div
        className="flex h-full w-[200%] transition-transform duration-350 ease-in-out"
        style={{
          // RTL: slide left to reveal sub (translateX positive), LTR: slide right (negative)
          transform: activeMenu
            ? isRTL
              ? "translateX(50%)"
              : "translateX(-50%)"
            : "translateX(0)",
        }}
      >
        {/* ─── MAIN MENU (left panel in LTR, right panel in RTL) ─── */}
        <nav
          className="w-1/2 h-full flex flex-col justify-center items-center gap-6 px-6
            shrink-0"
        >
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => {
                if (link.items?.length) {
                  setActiveMenu(link);
                } else {
                  // wrap in NavLink behaviour — navigate then close
                  closeOnLinkClick();
                }
              }}
              className="nav_link text-lg text-white w-fit mx-auto flex items-center gap-2
                hover:text-secondary transition-colors duration-200"
            >
              {/* For links WITH subitems, render as plain button; otherwise NavLink */}
              {link.items?.length ? (
                <>
                  {link.name}
                  <IoChevronForward
                    className={`text-sm opacity-60 ${isRTL ? "rotate-180" : ""}`}
                  />
                </>
              ) : (
                <NavLink
                  to={link.href}
                  end={isExact(link.href)}
                  onClick={closeOnLinkClick}
                  className={({ isActive }) =>
                    isActive ? "text-secondary" : "text-white"
                  }
                >
                  {link.name}
                </NavLink>
              )}
            </button>
          ))}
        </nav>

        {/* ─── SUB MENU (right panel in LTR, left panel in RTL) ─── */}
        <nav
          className="w-1/2 h-full flex flex-col justify-center items-start gap-4 px-8
            shrink-0 overflow-y-auto"
        >
          {/* Back button */}
          <button
            onClick={() => setActiveMenu(null)}
            className="flex items-center gap-2 text-white/70 hover:text-white
              transition-colors duration-200 mb-4 self-start"
          >
            <IoArrowBack className={isRTL ? "rotate-180" : ""} />
            <span className="text-sm">{t("back")}</span>
          </button>

          {/* Sub menu title */}
          {/* {activeMenu && (
            <p className="text-secondary font-bold text-xl mb-2 self-start">
              {activeMenu.name}
            </p>
          )} */}

          {/* Sections */}
          {activeMenu?.items.map((section) => (
            <div key={section.id} className="w-full">
              <NavLink
                to={section.href}
                onClick={closeOnLinkClick}
                className="text-secondary font-bold text-xl mb-1 block
                  hover:text-secondary transition-colors duration-200"
              >
                {section.title}
              </NavLink>

              {section.list.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.href}
                  onClick={closeOnLinkClick}
                  className={({ isActive }) =>
                    `block py-1 ps-3 text-sm border-s-2 mb-1 transition-colors duration-200
                      ${
                        isActive
                          ? "text-secondary border-secondary"
                          : "text-white/70 border-white/20 hover:text-white hover:border-white/50"
                      }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>
      </div>
    </div>,
    document.body,
  );
};

export default MobileNav;
