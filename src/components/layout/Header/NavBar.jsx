import { NavLink } from "react-router";
import useNavigationLinks from "@/hooks/useNavigationLinks";

const NavBar = () => {
  const links = useNavigationLinks();

  return (
    <nav className="hidden lg:flex items-center justify-center gap-4">
      {links.map((link) => (
        <NavLink key={link.name} to={link.href} className="nav_link">
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
