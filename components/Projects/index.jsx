"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ContactButton from "../common/AnimatedButton";
import { useIsLaptop, useIsMobile } from "@/customHook/screen-hooks";
import { projects } from "@/const/project";

const textContent = ["Featured projects"];

const Projects = ({ laptop, tab, mobile }) => {
  const containerRef = useRef(null);
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

  return (
    <div
      className=" text-white min-h-screen mt-[70px] max-main:mt-[80px] max-lg:mt-[60px] max-md:mt-[40px] mb-[160px] max-main:mb-[140px] max-lg:mb-[120px] max-md:mb-[100px] main-wrapper"
      id="projects"
    >
      <div ref={containerRef} className="relative flex max-lg:flex-col">
        <div className="w-[40%] max-lg:w-full max-lg:relative sticky left-0 top-0 pt-[90px] max-main:pt-[60px] self-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-mobile:px-[15px]"
          >
            <div>
              <div ref={ref} className="mx-auto">
                {textContent.map((para, pIdx) => {
                  const words = para.split("");

                  return (
                    <motion.p
                      key={pIdx}
                      className="text-[70px] max-md:text-[44px] font-medium leading-[normal] max-md:max-w-[205px] max-w-[350px] font-medium text-white whitespace-pre-wrap"
                    >
                      {words.map((word, i) => {
                        const globalIndex = pIdx * 100 + i; // unique per paragraph
                        const start =
                          globalIndex /
                          (words.length * textContent.length * 1.5);
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

              <motion.p
                className="text-[#ACACAC] text-[22px] max-lg:text-lg mt-[25px] max-lg:max-w-[350px] max-w-[450px] leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Explore a selection of projects blending creativity with
                practical design
              </motion.p>
            </div>

            <ContactButton
              className="mt-[48px] max-md:mt-[40px]"
              text="All Works"
              textHidden={false}
              href="https://github.com/YashBhakhar"
            />
          </motion.div>
        </div>
        <div className="w-[60%] max-lg:w-full pt-[90px] px-[15px] max-main:pt-[60px] relative">
          <div className="space-y-[110px] max-lg:space-y-[70px]">
            {projects.map((project, index) => {
              const ref = useRef(null);

              // scroll for this specific card
              const { scrollYProgress } = useScroll({
                target: ref,
                offset: ["start end", "end start"], // when card enters/leaves viewport
              });

              // map scroll progress (0→1) into Y transform
              const y = useTransform(
                scrollYProgress,
                [0, 1],
                [mobile ? -100 : tab ? -120 : laptop ? -230 : -160, 50] // adjust range for depth
              );

              return (
                <div
                  key={project.id}
                  ref={ref}
                  className="relative max-mobile:mb-[60px]"
                >
                  {/* Project image */}
                  <div className="rounded-[50px] max-mobile:rounded-[38px] relative max-lg:max-w-none max-mobile:h-[345px] max-lg:h-[600px] max-main:max-w-[758px] max-main:h-[760px] h-[930px] max-w-[1003px] w-full overflow-hidden max-mobile:mb-[14px] mb-[24px] bg-gray-800">
                    <motion.img
                      src={project.image}
                      style={{ y }}
                      className={` w-full max-mobile:h-[420px] max-lg:h-[850px] max-main:h-[860px] h-[1116px] will-change-transform transform-gpu bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center`}
                    />
                    <div className="flex flex-wrap absolute bottom-0 left-0 max-md:gap-[10px] gap-[14px] max-mobile:p-[30px] p-10">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className="px-3 max-md:h-[32px] max-md:text-sm h-[36px] bg-[#161616] rounded-full inline-flex justify-center items-center text-[#fff]"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  {/* Project details */}
                  <div className="px-10">
                    <p className="max-md:text-[22px] text-[30px] text-[#ACACAC]">
                      <span className="text-white font-medium">
                        {project.title}
                      </span>
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
