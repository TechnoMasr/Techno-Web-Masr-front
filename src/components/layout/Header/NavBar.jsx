import { NavLink } from "react-router";
import { useState } from "react";
import useNavigationLinks from "@/hooks/useNavigationLinks";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const NavBar = () => {
  const links = useNavigationLinks();

  const [openPopover, setOpenPopover] = useState(null);

  return (
    <nav className="hidden lg:flex items-center justify-center gap-8">
      {links.map((link, index) => {
        // ✅ بدون items
        if (!link.items || link.items.length === 0) {
          return (
            <NavLink key={link.name} to={link.href} className="nav_link">
              {link.name}
            </NavLink>
          );
        }

        // ✅ مع Mega Menu
        return (
          <Popover
            key={link.name}
            open={openPopover === index}
            onOpenChange={(isOpen) => setOpenPopover(isOpen ? index : null)}
          >
            <PopoverTrigger asChild>
              <button className="nav_link">{link.name}</button>
            </PopoverTrigger>

            <PopoverContent
              align="center"
              className="w-[600px] p-6 bg-primary border-0 hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-6">
                {link.items.map((section) => (
                  <div key={section.id}>
                    <NavLink
                      to={section.href}
                      onClick={() => setOpenPopover(null)} // 👈 يقفل هنا
                      className="font-semibold text-lg inline-block text-secondary mb-3"
                    >
                      {section.title}
                    </NavLink>

                    <ul className="space-y-2">
                      {section.list.map((item) => (
                        <li key={item.id}>
                          <NavLink
                            to={item.href}
                            onClick={() => setOpenPopover(null)} // 👈 ويقفل هنا
                            className="block text-sm text-white hover:text-secondary transition"
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        );
      })}
    </nav>
  );
};

export default NavBar;
