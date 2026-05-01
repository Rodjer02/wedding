import { useEffect } from "react";

export function AutoReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "main section, main footer"
    );

    if (typeof IntersectionObserver === "undefined") {
      sections.forEach((s) => s.setAttribute("data-reveal", "visible"));
      return;
    }

    sections.forEach((s) => {
      if (!s.dataset.reveal && !s.classList.contains("noReveal") && s.id !== "hero") {
        s.setAttribute("data-reveal", "");
      }
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const t = e.target as HTMLElement;
            t.setAttribute("data-reveal", "visible");
            obs.unobserve(t);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    sections.forEach((s) => {
      if (s.getAttribute("data-reveal") === "") obs.observe(s);
    });

    return () => obs.disconnect();
  }, []);

  return null;
}
