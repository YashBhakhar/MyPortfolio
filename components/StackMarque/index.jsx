"use client";
import { useEffect, useRef } from "react";
import { useMotionValue, animate } from "framer-motion";

const StackMarque = ({ className = "", direction = "right", children }) => {
  const containerRef = useRef(null);

  const baseSpeed = 100; // px/sec
  const speed = useMotionValue(baseSpeed);

  useEffect(() => {
    let offset = 0;
    let lastTime = performance.now();
    let rafId;

    const tick = (time) => {
      const delta = (time - lastTime) / 2000;
      lastTime = time;

      const dir = direction === "left" ? -1 : 1;
      offset += dir * speed.get() * delta;

      const container = containerRef.current;
      if (container) {
        const width = container.scrollWidth / 3; // ✅ divide by repeat count
        offset = ((offset % width) + width) % width; // ✅ always wrap cleanly
        container.style.transform = `translateX(${-offset}px)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [speed, direction]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollFactor = window.scrollY / 8;
      const target = baseSpeed + scrollFactor;

      animate(speed, target, {
        type: "spring",
        stiffness: 500,
        damping: 50,
      });

      clearTimeout(handleScroll.t);
      handleScroll.t = setTimeout(() => {
        animate(speed, baseSpeed, {
          type: "spring",
          stiffness: 500,
          damping: 50,
        });
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <div ref={containerRef} className="flex">
        {/* ✅ repeat 3 times for smooth infinite effect */}
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <span
              key={i}
              className={`${className} flex px-4 text-xl`}
            >
              {children}
            </span>
          ))}
      </div>
    </div>
  );
};

export default StackMarque;
