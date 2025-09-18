"use client";
import { useState, useEffect, useRef } from "react";

export function useInViewCustom({
  threshold = 0.3,
  root = null,
  rootMargin = "0px",
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold, root, rootMargin]);

  return [ref, inView];
}
