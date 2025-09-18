"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useScroll,
  useSpring,
} from "framer-motion";
import { testimonials } from "@/const/testimonial";
import { ArrowLeft, ArrowRight } from "lucide-react";

const textContent = ["What my clients say"];

const CLientReview = ({ main, laptop, tab, mobile }) => {
  const base = testimonials;
  const total = base.length;
  if (!total) return null;

  const viewportRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const ref = useRef(null);

  const { scrollYProgress: scrollProgress } = useScroll({
    target: ref,
    offset: ["0.5 1", "1 0.8"],
  });

  const smoothProgress = useSpring(scrollProgress, {
    stiffness: 50,
    damping: 25,
    mass: 1,
  });

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    setViewportWidth(el.clientWidth);

    const ro = new ResizeObserver(() => {
      setViewportWidth(el.clientWidth);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const GAP = tab || mobile ? 0 : 24;
  const SLIDE_W =
    tab || mobile ? viewportWidth : laptop ? 460 : main ? 500 : 630;

  const ITEM_W = (SLIDE_W || 0) + GAP;

  const TRANS_DUR = 0.75; // seconds
  const BLUR_PX = 6;
  const MIN_OPACITY = 0.56;

  const slides = [...base, ...base, ...base];
  const CENTER = total;

  const [index, setIndex] = useState(CENTER);
  const x = useMotionValue(0);

  useEffect(() => {
    if (ITEM_W <= 0) return;
    x.set(-index * ITEM_W);
  }, [ITEM_W]);

  useEffect(() => {
    if (ITEM_W <= 0) return;
    const controls = animate(x, -index * ITEM_W, {
      duration: TRANS_DUR,
      ease: "easeInOut",
    });
    return () => controls.stop();
  }, [index, ITEM_W, x]);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => i + 1), 3000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (ITEM_W <= 0) return;
    if (index < CENTER || index >= CENTER + total) {
      const id = setTimeout(() => {
        const logical = (((index - CENTER) % total) + total) % total;
        const newIndex = CENTER + logical;
        setIndex(newIndex);
        x.set(-newIndex * ITEM_W);
      }, TRANS_DUR * 1000 + 30);
      return () => clearTimeout(id);
    }
  }, [index, CENTER, total, x, ITEM_W]);

  const currentLogical = (((index - CENTER) % total) + total) % total;
  const goToLogical = (logicalIdx) => {
    const delta = logicalIdx - currentLogical;
    setIndex((i) => i + delta);
  };
  const prev = () => setIndex((i) => i - 1);
  const next = () => setIndex((i) => i + 1);

  const TestimonialCard = ({ item, globalIndex }) => {
    const progress = useTransform(x, (v) => {
      if (ITEM_W <= 0) return 0;
      const pos = -v / ITEM_W;
      const p = 1 - Math.abs(globalIndex - pos);
      return Math.max(0, Math.min(1, p));
    });

    const opacity = useTransform(progress, [0, 1], [MIN_OPACITY, 1]);
    const blur = useTransform(progress, (p) => `blur(${BLUR_PX * (1 - p)}px)`);

    return (
      <motion.div
        initial={false}
        style={{
          width: `${SLIDE_W}px`,
          minWidth: `${SLIDE_W}px`,
          filter: blur,
          opacity,
          willChange: "transform, filter, opacity",
        }}
        onClick={() => {
          const logical = (((globalIndex - CENTER) % total) + total) % total;
          if (logical !== currentLogical) goToLogical(logical);
        }}
        className="bg-[#1c1c1c] p-10 rounded-3xl shadow-2xl max-mobile:h-[512px] max-md:h-[425px] max-lg:h-[600px] max-main:h-[640px] h-[700px] flex flex-col justify-between flex-shrink-0 cursor-pointer"
      >
        <div className="flex justify-between mb-[50px]">
          <div className="max-main:w-[100px] max-main:h-[100px] max-md:w-[80px] max-md:h-[80px] w-[120px] h-[120px] flex justify-center items-center  rounded-full bg-gray-700 overflow-hidden">
            <img src={item.user} alt={item.name} />
          </div>
          <div className="flex justify-center ">
            <div className="text-gray-400 max-md:text-2xl max-main:text-4xl text-[40px] font-bold">
              {item.company}
            </div>
          </div>
        </div>

        <p className="text-[#ACACAC] text-justify max-md:text-base max-main:text-lg text-[22px] mb-4 leading-relaxed flex-grow">
          {item.testimonial}
        </p>

        <div className="">
          <h4 className="text-white max-lg:text-[26px] text-[34px] font-semibold mb-1">
            {item.name}
          </h4>
          <p className="text-[#ACACAC] max-main:text-base text-lg">
            {item.role}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="flex max-lg:flex-col max-lg:gap-[80px] main-wrapper" id="review">
      <div className="max-lg:w-full w-2/5 max-mobile:px-[15px]">
        <div className="mx-auto">
          <div ref={ref} className="mx-auto">
            {textContent.map((para, pIdx) => {
              const words = para.split("");

              return (
                <motion.p
                  key={pIdx}
                  className="text-[70px] max-md:text-[44px] leading-[normal] max-mobile:max-w-[355px] small-mobile-w max-lg:max-w-none max-main:max-w-[355px] max-w-[555px] font-medium text-white whitespace-pre-wrap"
                >
                  {words.map((word, i) => {
                    const globalIndex = pIdx * 100 + i; // unique per paragraph
                    const start =
                      globalIndex / (words.length * textContent.length * 1.5);
                    const end = Math.min(
                      (globalIndex + 3) /
                        (words.length * textContent.length * 1.5),
                      1
                    );

                    const opacity = useTransform(
                      smoothProgress,
                      [start, end],
                      [0.05, 1]
                    );

                    return (
                      <motion.span
                        key={i}
                        style={{ opacity }}
                        className="inline-block leading-[normal]"
                      >
                        {word}
                      </motion.span>
                    );
                  })}
                </motion.p>
              );
            })}
          </div>
        </div>
        <p className="text-[22px] max-main:text-lg text-[#ACACAC] font-light max-w-[550px] mt-[25px]">
          We're more than just executors — we're your creative partners. Don't
          just take our word for it, see what clients have to say about working
          with us.
        </p>
      </div>

      <div className="max-lg:w-full w-3/5 flex flex-col justify-center relative overflow-hidden pb-[70px] px-[15px]">
        <div className="relative flex items-center">
          <div className="w-full overflow-hidden" ref={viewportRef}>
            <motion.div
              className="flex items-center"
              initial={false}
              style={{ x, gap: `${GAP}px`, willChange: "transform" }}
            >
              {slides.map((s, i) => (
                <TestimonialCard
                  key={`${i}-${s.name}-${s.company}`}
                  item={s}
                  globalIndex={i}
                />
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-1 left-20 transform -translate-x-1/2 flex space-x-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white  transition-colors duration-200"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border  flex items-center justify-center text-white border-white transition-colors duration-200"
          >
            <ArrowRight />
          </button>
        </div>
        <div className="absolute w-[60px] h-full bg-base-gradient top-0 right-0 " />
      </div>
    </div>
  );
};

export default CLientReview;
