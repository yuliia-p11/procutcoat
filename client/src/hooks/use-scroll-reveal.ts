import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { threshold?: number; rootMargin?: string }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const children = el.querySelectorAll("[data-reveal]");
    children.forEach((child) => {
      (child as HTMLElement).classList.add("reveal-hidden");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targets = entry.target.querySelectorAll("[data-reveal]");
            targets.forEach((target) => {
              const htmlTarget = target as HTMLElement;
              const variant = htmlTarget.dataset.reveal || "up";
              const delay = htmlTarget.dataset.revealDelay || "0";
              htmlTarget.classList.remove("reveal-hidden");
              htmlTarget.classList.add(
                variant === "fade" ? "reveal-visible-fade" : "reveal-visible"
              );
              if (delay !== "0") {
                htmlTarget.classList.add(`reveal-delay-${delay}`);
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options?.threshold ?? 0.12,
        rootMargin: options?.rootMargin ?? "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin]);

  return ref;
}
