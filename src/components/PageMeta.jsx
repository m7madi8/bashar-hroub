import { useEffect } from "react";
import data from "../Data";

function upsertMeta(attr, key, content) {
  if (!content) return;

  let element = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function PageMeta({
  title,
  description = "Bashar Hroub — contemporary artist portfolio. Paintings, commissions, and selected works.",
}) {
  useEffect(() => {
    // Tab shows artist name only
    document.title = data.HeaderTitle;
    upsertMeta("name", "description", description);
    upsertMeta(
      "property",
      "og:title",
      title ? `${title} — ${data.HeaderTitle}` : data.HeaderTitle
    );
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
  }, [title, description]);

  return null;
}

export default PageMeta;
