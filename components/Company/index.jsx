"use client";
import {
  useScroll,
  useSpring,
  motion,
  useTransform,
  useAnimation,
} from "framer-motion";
import React, { useRef, useState } from "react";
import ContactButton from "../common/AnimatedButton";
import { companies } from "@/const/company";

const textContent = ["Trusted By Leaders"];

const Company = () => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(null);
  const { scrollYProgress: scrollProgress } = useScroll({
    target: ref,
    offset: ["0.5 1", "1 0.8"],
  });

  const smoothProgress = useSpring(scrollProgress, {
    stiffness: 50,
    damping: 25,
    mass: 1,
  });

  return (
    <div className="main-wrapper" id="company">
      <div className="flex max-lg:flex-col align-top mb-[68px]">
        <div ref={ref} className="px-[15px] max-lg:w-full w-1/2">
          {textContent.map((para, pIdx) => {
            const words = para.split("");

            return (
              <motion.p
                key={pIdx}
                className="text-[70px] max-md:text-[44px] leading-[normal] max-mobile:max-w-[250px] max-lg:max-w-none max-w-[385px] font-medium text-white whitespace-pre-wrap"
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
        <div className="w-1/4 max-lg:w-full px-[15px] pt-[7px]">
          <p className="text-[22px] max-main:text-lg text-[#ACACAC] font-light">
            Innovate
          </p>
          <p className="text-[22px] max-main:text-lg text-[#ACACAC] font-light">
            Integrate
          </p>
          <p className="text-[22px] max-main:text-lg text-[#ACACAC] font-light">
            Iterate
          </p>
        </div>
        <div className="w-1/4 max-lg:w-full px-[15px] flex max-lg:justify-start justify-end max-lg:pt-[32px] pt-[17px]">
          <ContactButton
            text="Let's Chat"
            textHidden={false}
            className="h-[56px]"
            spanClass="!w-[125px]"
            href="#contact"
          />
        </div>
      </div>
      {companies.map((c, i) => {
        const controls = useAnimation();

        return (
          <motion.div
            key={c.id}
            initial={{ opacity: 1 }}
            animate={{
              opacity: hovered && hovered !== c.id ? 0.5 : 1,
            }}
            transition={{ duration: 0.3 }}
            className={`relative ${i > 0 && "-mt-0.5"}`}
            onMouseEnter={() => {
              setHovered(c.id);
              controls.start({
                rotate: [0, 360],
                transition: {
                  repeat: Infinity,
                  duration: 6,
                  ease: "linear",
                },
              });
            }}
            onMouseLeave={() => {
              setHovered(null);
              controls.stop(); // 🛑 stops rotation immediately
            }}
          >
            {/* Top Line */}
            <div className="h-[2px] w-[calc(100%-30px)] bg-white left-[15px] relative" />

            {/* Content */}
            <div className="py-[80px] max-md:py-[60px] max-lg:flex-col flex">
              {/* Image */}
              <div className="w-[16%] max-lg:w-full max-lg:pb-[20px] px-[15px] ">
                <motion.img
                  src={c.img}
                  className="h-[70px] w-[70px]"
                  animate={controls}
                />
              </div>

              {/* Name */}
              <div className="w-[34%] font-medium max-lg:w-full max-xl:px-[15px] px-[45px] max-lg:text-left text-right text-white max-lg:text-[22px] max-lg:pb-[20px] text-[30px]">
                {c.name}
              </div>

              {/* Description */}
              <div className="w-1/2 max-lg:w-full px-[15px] max-main:text-lg text-[22px] text-[#ACACAC] font-light">
                {c.desc}
              </div>
            </div>

            {/* Bottom Line */}
            <div className="h-[2px] w-[calc(100%-30px)] bg-white left-[15px] relative" />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Company;
