"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

// Matches the sections' scroll-mt so anchored headings clear the fixed header.
const ANCHOR_OFFSET = -96;

/**
 * Smooth scroll for the whole site, synced to ScrollTrigger so reveals
 * fire at the right moment. Disabled entirely under reduced motion.
 *
 * Hash navigation is routed through Lenis: native jumps get clobbered
 * by Lenis's animation loop (it keeps easing toward its own target, so
 * the browser's anchor jump snaps straight back to the top).
 */
export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis();
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Same-page anchor clicks (e.g. "/#live-demo" while on "/"): beat the
    // router to it and smooth-scroll instead.
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as Element | null)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.includes("#")) return;

      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname !== window.location.pathname || !url.hash) return;

      const target = document.querySelector(url.hash);
      if (!target) return;

      e.preventDefault();
      e.stopPropagation();
      history.pushState(null, "", url.hash);
      lenis.scrollTo(target as HTMLElement, { offset: ANCHOR_OFFSET });
    };
    document.addEventListener("click", onClick, true);

    return () => {
      document.removeEventListener("click", onClick, true);
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Cross-page navigation that lands with a hash (e.g. footer "Live demo"
  // from /about): scroll once the new page has mounted.
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const target = document.querySelector(hash);
    if (!target) return;

    const frame = requestAnimationFrame(() => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(target as HTMLElement, {
          offset: ANCHOR_OFFSET,
        });
      } else {
        // Reduced motion: no Lenis instance, use the native jump.
        target.scrollIntoView();
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return <>{children}</>;
}
