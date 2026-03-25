// SeoManager.jsx - نسخة نضيفة ومضبوطة
import { useEffect } from "react";

const SeoManager = ({ title, description, keywords, canonical, ogImage }) => {
  useEffect(() => {
    // Title
    document.title = title || "Techno Web Masr";

    const setMeta = (selector, attrs, value) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        Object.entries(attrs).forEach(([k, v]) => tag.setAttribute(k, v));
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value || "");
    };

    // Basic meta
    setMeta("meta[name='description']", { name: "description" }, description);
    setMeta(
      "meta[name='keywords']",
      { name: "keywords" },
      keywords?.join(", "),
    );

    // Canonical
    let canonicalTag = document.querySelector("link[rel='canonical']");
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", canonical || window.location.href);

    // OG Tags
    const setOG = (property, content) => {
      let tag = document.querySelector(`meta[property='${property}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content || "");
    };

    setOG("og:title", title);
    setOG("og:description", description);
    setOG("og:image", ogImage);
    setOG("og:type", "website");
  }, [title, description, keywords, canonical, ogImage]);

  return null;
};

export default SeoManager;
