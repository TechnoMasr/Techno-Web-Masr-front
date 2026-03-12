const useNavigationLinks = () => {
  const links = [
    { name: "الرئيسية", href: "/", items: [] },
    { name: "من نحن", href: "/about", items: [] },
    { name: "خدماتنا", href: "/services", items: [] },
    { name: "سابقة الأعمال", href: "/portfolio", items: [] },
    { name: "عمالائنا", href: "/our-partners", items: [] },
    { name: "تواصل معنا", href: "/contact", items: [] },
  ];

  return links;
};

export default useNavigationLinks;
