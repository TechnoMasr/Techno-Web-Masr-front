import { useEffect } from "react";

const SeoManager = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  schemaMarkup,
}) => {
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

    // OG Tags — لو القيمة فاضية، امسح التاج بدل ما يتحط فاضي
    const setOG = (property, content) => {
      let tag = document.querySelector(`meta[property='${property}']`);
      if (!content) {
        if (tag) tag.remove();
        return;
      }
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setOG("og:title", title);
    setOG("og:description", description);
    setOG("og:image", ogImage);
    setOG("og:type", "website"); // ده ثابت دايمًا، مش هيتشال

    // JSON-LD (Structured Data)
    let ldScript = document.querySelector("script[data-seo-jsonld]");

    if (schemaMarkup) {
      if (!ldScript) {
        ldScript = document.createElement("script");
        ldScript.setAttribute("type", "application/ld+json");
        ldScript.setAttribute("data-seo-jsonld", "true");
        document.head.appendChild(ldScript);
      }
      ldScript.textContent = JSON.stringify(schemaMarkup);
    } else if (ldScript) {
      ldScript.remove();
    }

    // Cleanup عند الـ unmount
    return () => {
      const existing = document.querySelector("script[data-seo-jsonld]");
      if (existing) existing.remove();
    };
  }, [title, description, keywords, canonical, ogImage, schemaMarkup]);

  return null;
};

export default SeoManager;
