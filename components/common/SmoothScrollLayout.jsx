"use client";
import { createContext, useContext, useEffect, useRef } from "react";

const SmoothCtx = createContext(null);
export const useSmoothScroll = () => useContext(SmoothCtx);

export default function SmoothScrollProvider({ children }) {
  const rafRef = useRef(null);
  const targetScrollRef = useRef(0);
  const currentScrollRef = useRef(0);
  const isRunningRef = useRef(false);

  useEffect(() => {
    currentScrollRef.current = window.scrollY;
    targetScrollRef.current = window.scrollY;

    const SCROLL_SPEED_WHEEL = 0.1; // snappy for manual scroll
    const SCROLL_SPEED_LINK = 0.05; // slower for anchor link

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const smoothStep = (factor) => {
      currentScrollRef.current = lerp(
        currentScrollRef.current,
        targetScrollRef.current,
        factor
      );

      const diff = Math.abs(targetScrollRef.current - currentScrollRef.current);

      if (diff > 0.5) {
        window.scrollTo(0, currentScrollRef.current);
        rafRef.current = requestAnimationFrame(() => smoothStep(factor));
      } else {
        window.scrollTo(0, targetScrollRef.current);
        currentScrollRef.current = targetScrollRef.current;
        isRunningRef.current = false;
      }
    };

    // 🖱 Wheel handler
    const handleWheel = (e) => {
      e.preventDefault();
      targetScrollRef.current += e.deltaY;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      targetScrollRef.current = Math.max(
        0,
        Math.min(targetScrollRef.current, maxScroll)
      );

      if (!isRunningRef.current) {
        isRunningRef.current = true;
        smoothStep(SCROLL_SPEED_WHEEL);
      }
    };

    // ⌨️ Keyboard handler
    const handleKeyDown = (e) => {
      const keys = [
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
      ];
      if (keys.includes(e.key)) {
        e.preventDefault();

        let delta = 0;
        switch (e.key) {
          case "ArrowUp":
            delta = -40;
            break;
          case "ArrowDown":
            delta = 40;
            break;
          case "PageUp":
            delta = -window.innerHeight * 0.8;
            break;
          case "PageDown":
            delta = window.innerHeight * 0.8;
            break;
          case "Home":
            targetScrollRef.current = 0;
            break;
          case "End":
            targetScrollRef.current =
              document.documentElement.scrollHeight - window.innerHeight;
            break;
        }

        if (delta !== 0) {
          const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;
          targetScrollRef.current = Math.max(
            0,
            Math.min(targetScrollRef.current + delta, maxScroll)
          );
        }

        if (!isRunningRef.current) {
          isRunningRef.current = true;
          smoothStep(SCROLL_SPEED_WHEEL);
        }
      }
    };

    // 🔗 Anchor click handler
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest("a[href^='#']");
      if (anchor) {
        const id = anchor.getAttribute("href").slice(1);
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          const offsetTop = target.offsetTop;

          targetScrollRef.current = offsetTop;
          if (!isRunningRef.current) {
            isRunningRef.current = true;
            smoothStep(SCROLL_SPEED_LINK); // slower for anchor
          }
        }
      }
    };

    // ✅ Event bindings
    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleAnchorClick);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <SmoothCtx.Provider value={{}}>
      <div className="w-full">{children}</div>
    </SmoothCtx.Provider>
  );
}
