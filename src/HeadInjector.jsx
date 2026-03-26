import { useQuery } from "@tanstack/react-query";
import { getHeadCode } from "./api/mainServices";
import { useEffect } from "react";

const HeadInjector = () => {
  const { data: headCode } = useQuery({
    queryKey: ["headCode"],
    queryFn: getHeadCode,
  });

  useEffect(() => {
    if (!headCode) return;

    if (document.querySelector('[data-injected="head-code"]')) return;

    const marker = document.createElement("meta");
    marker.setAttribute("data-injected", "head-code");
    document.head.appendChild(marker);

    // inject web_favicon
    if (headCode.web_favicon) {
      document
        .querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')
        .forEach((el) => el.remove());

      const link = document.createElement("link");
      link.rel = "icon";
      link.href = headCode.web_favicon;

      const ext = headCode.web_favicon
        .split(".")
        .pop()
        .toLowerCase()
        .split("?")[0];
      const typeMap = {
        svg: "image/svg+xml",
        png: "image/png",
        ico: "image/x-icon",
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        webp: "image/webp",
      };
      if (typeMap[ext]) link.type = typeMap[ext];

      document.head.appendChild(link);
    }

    // inject custom_head_code في الـ <head>
    if (headCode.custom_head_code) {
      const headContainer = document.createElement("div");
      headContainer.innerHTML = headCode.custom_head_code;

      Array.from(headContainer.childNodes).forEach((node) => {
        if (node.nodeName === "SCRIPT") {
          const script = document.createElement("script");
          Array.from(node.attributes).forEach((attr) => {
            script.setAttribute(attr.name, attr.value);
          });
          script.textContent = node.textContent;
          document.head.appendChild(script);
        } else {
          document.head.appendChild(node.cloneNode(true));
        }
      });
    }

    // inject custom_footer_code في نهاية الـ <body>
    if (headCode.custom_footer_code) {
      const bodyContainer = document.createElement("div");
      bodyContainer.innerHTML = headCode.custom_footer_code;

      Array.from(bodyContainer.childNodes).forEach((node) => {
        if (node.nodeName === "SCRIPT") {
          const script = document.createElement("script");
          Array.from(node.attributes).forEach((attr) => {
            script.setAttribute(attr.name, attr.value);
          });
          script.textContent = node.textContent;
          document.body.appendChild(script);
        } else {
          document.body.appendChild(node.cloneNode(true));
        }
      });
    }
  }, [headCode]);

  return null;
};

export default HeadInjector;
