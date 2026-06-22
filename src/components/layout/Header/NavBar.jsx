import { NavLink, useLocation } from "react-router";
import { useState } from "react";
import { useParams } from "react-router";
import useNavigationLinks from "@/hooks/useNavigationLinks";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const NavBar = () => {
  const { lang } = useParams();
  const location = useLocation();
  const locale = lang || "ar";

  const links = useNavigationLinks().filter(
    (link) => link.href !== `/${locale}/blog`,
  );

  const [openPopover, setOpenPopover] = useState(null);

  const isExact = (href) => href === `/${locale}`;

  return (
    <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-8">
      {links.map((link, index) => {
        if (!link.items || link.items.length === 0) {
          return (
            <NavLink
              key={link.name}
              to={link.href}
              end={isExact(link.href)} // ✅ الحل هنا
              className={({ isActive }) =>
                `nav_link ${isActive ? "active" : ""}`
              }
            >
              {link.name}
            </NavLink>
          );
        }

        return (
          <Popover
            key={link.name}
            open={openPopover === index}
            onOpenChange={(isOpen) => setOpenPopover(isOpen ? index : null)}
            modal={true}
          >
            <PopoverTrigger asChild>
              <button
                className={`nav_link ${location.pathname === link.href ? "active" : ""}`}
              >
                {link.name}
              </button>
            </PopoverTrigger>

            <PopoverContent
              align="center"
              className="w-screen h-screen! p-0 border-0 hidden lg:block bg-black/20 shadow-none rounded-none"
              onClick={() => setOpenPopover(null)}
            >
              <div
                className="container mx-auto p-6 bg-primary shadow-lg rounded-b-lg mt-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between gap-6">
                  {link.items.map((section) => (
                    <div key={section.id} className="min-w-5/12">
                      <NavLink
                        to={section.href}
                        onClick={() => setOpenPopover(null)}
                        className="inline-block text-secondary mb-3 text-xl hover:underline"
                      >
                        {section.title}
                      </NavLink>

                      <ul className="grid grid-cols-2 gap-2">
                        {section.list.map((item) => (
                          <li key={item.id}>
                            <NavLink
                              to={item.href}
                              onClick={() => setOpenPopover(null)}
                              className={({ isActive }) =>
                                `block transition text-lg ${
                                  isActive
                                    ? "text-secondary"
                                    : "text-white hover:text-secondary"
                                }`
                              }
                            >
                              {item.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        );
      })}
    </nav>
  );
};

export default NavBar;
