import { useEffect } from "react";

const stripHtml = (html) => {
  if (!html) return "";
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const defaultTitle = "View Car";
const defaultDescription = "View Car Website";
const defaultKeywords = "";

const SeoManager = ({ title, description, keywords }) => {
  useEffect(() => {
    // Title
    document.title = title || defaultTitle;

    // Description
    let desc = document.querySelector("meta[name='description']");
    if (!desc) {
      desc = document.createElement("meta");
      desc.name = "description";
      document.head.appendChild(desc);
    }
    desc.content = stripHtml(description) || defaultDescription;

    // Keywords
    let keys = document.querySelector("meta[name='keywords']");
    if (!keys) {
      keys = document.createElement("meta");
      keys.name = "keywords";
      document.head.appendChild(keys);
    }

    if (Array.isArray(keywords)) {
      keys.content = keywords.join(", ");
    } else {
      keys.content = stripHtml(keywords) || defaultKeywords;
    }

    // 👇 Cleanup لما الصفحة تتغير
    return () => {
      document.title = defaultTitle;

      if (desc) desc.content = defaultDescription;
      if (keys) keys.content = defaultKeywords;
    };
  }, [title, description, keywords]);

  return null;
};

export default SeoManager;
