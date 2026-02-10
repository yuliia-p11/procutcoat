import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { threshold?: number; rootMargin?: string; exitFade?: boolean }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      el.classList.remove("section-reveal");
      return;
    }

    el.classList.add("section-reveal");

    const shouldExitFade = options?.exitFade ?? false;
    let hasRevealed = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            hasRevealed = true;
            el.classList.add("section-visible");
            el.classList.remove("section-exiting");

            if (!shouldExitFade) {
              observer.unobserve(el);
            }
          } else if (hasRevealed && shouldExitFade) {
            const rect = entry.boundingClientRect;
            if (rect.bottom < 0) {
              el.classList.add("section-exiting");
              el.classList.remove("section-visible");
            }
          }
        });
      },
      {
        threshold: options?.threshold ?? 0.08,
        rootMargin: options?.rootMargin ?? "0px 0px -60px 0px",
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin, options?.exitFade]);

  return ref;
}

export function useLaserReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    el.classList.add("laser-line-hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.remove("laser-line-hidden");
            el.classList.add("laser-line-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
