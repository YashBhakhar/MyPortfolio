"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import PlusIcon from "../Icons/PlusIcon";
import AnimatedButton from "../common/AnimatedButton";

const paragraphs = [
  `My passion for technology and problem-solving led me to pursue a Bachelor’s in Computer Applications (BCA), where I discovered my love for building user-focused web apps. 💻 I specialize in the React ecosystem and the MERN stack, creating responsive frontends with ReactJS/NextJS and robust backends with NodeJS/Express. My experience spans working with MongoDB & PostgreSQL 🗄️, along with deploying and scaling apps on AWS ☁️ for reliable, production-ready solutions.`,
];

const WhoAmI = () => {
  const ref = useRef(null);

  // scroll progress for the wrapper
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.3 0.8", "1 0.8"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  });

  return (
    <div
      className="flex max-lg:flex-col items-baseline main-wrapper"
      id="whoami"
    >
      <motion.h3
        className="flex flex-1 gap-4 max-lg:mb-[34px] max-mobile:mb-[28px] text-white text-2xl items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <PlusIcon className="w-[22px] h-[22px] fill-white" /> Who Am I
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div ref={ref} className="max-w-2xl mx-auto space-y-6">
          {paragraphs.map((para, pIdx) => {
            const words = para.split(" ");

            return (
              <motion.p
                key={pIdx}
                className="text-2xl font-light text-white leading-relaxed whitespace-pre-wrap"
              >
                {words.map((word, i) => {
                  const globalIndex = pIdx * 100 + i; // unique per paragraph
                  const start =
                    globalIndex / (words.length * paragraphs.length);
                  const end = Math.min(
                    (globalIndex + 3) / (words.length * paragraphs.length),
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
                      className="inline-block mr-2"
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </motion.p>
            );
          })}
        </div>
        <AnimatedButton
          className="mt-[50px] max-md:mt-[40px]"
          textHidden={false}
          href="#contact"
        />
      </motion.div>
    </div>
  );
};

export default WhoAmI;
