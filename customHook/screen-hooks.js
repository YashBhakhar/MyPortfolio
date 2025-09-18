"use client";
import { useEffect, useState } from "react";

export function useIsMobile(breakpoint = 440) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}

export function useIsTab() {
  const [isTab, setIsTab] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsTab(window.innerWidth >= 768 && window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isTab;
}

export function useIsLaptop() {
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const check = () => setIsLaptop(window.innerWidth < 1201);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isLaptop;
}
