"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const CountUpOnView = ({ target, duration = 2, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // har vaar trigger thase
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrame;

    if (isInView) {
      const startTime = performance.now();

      const animate = (time) => {
        const progress = Math.min((time - startTime) / (duration * 1000), 1);
        const current = Math.floor(progress * target);
        setCount(current);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    } else {
      // viewport bahar jaye to reset
      setCount(0);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {count}
    </motion.span>
  );
};

export default CountUpOnView;
