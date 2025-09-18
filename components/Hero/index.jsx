"use client";
import React from "react";
import Header from "../layout/Header";
import Marquee from "react-fast-marquee";
import PlusIcon from "../Icons/PlusIcon";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const rawRotate = useTransform(scrollY, [0, 2000], [0, 720]);

  // spring smoothing
  const rotate = useSpring(rawRotate, {
    stiffness: 20, // lower = smoother
    damping: 80, // higher = less bounce
    mass: 0.5,
  });

  return (
    <div
      className="main-wrapper h-screen max-w-[1770px] max-lg:h-auto pt-10 bg-background text-foreground relative"
      id="intro"
    >
      <Header />
      <main className="main_section_height flex-col justify-center items-center flex">
        <div className="relative font-medium max-md:w-full text-white z-10 max-md:px-[30px] max-main:px-[60px] px-[90px] justify-center flex flex-col items-center">
          <div className="flex max-md:items-center max-md:w-full max-md:flex-col max-md:h-[150px] max-lg:h-[100px] max-main:h-[150px] h-[175px]">
            <h1 className="max-md:text-[60px] max-lg:text-[80px] max-main:text-[120px] text-[140px] leading-[normal] max-md:text-center max-md:mr-0 mr-8">
              Client,
            </h1>
            <Marquee
              className=" max-md:max-w-[400px] max-lg:max-w-[265px] max-w-[458px] bg-[#DDF160] text-black rounded-full"
              direction="right"
            >
              {["react", "node.js", "next.js", "devOps"].map((d) => (
                <div className="flex items-center max-lg:gap-5 gap-10 max-lg:ml-5 ml-10">
                  <h2 className="max-md:text-[60px] max-lg:text-[80px] max-main:text-[120px] text-[140px] leading-[normal] ">
                    {d}
                  </h2>
                  <PlusIcon className="max-md:w-[40px] max-md:h-[40px] max-lg:w-[50px] max-lg:h-[50px] w-[85px] h-[85px]" />
                </div>
              ))}
            </Marquee>
          </div>
          <h1 className="max-md:text-[60px] max-lg:text-[80px] text-center max-main:text-[120px] text-[140px] leading-[normal] flex items-center">
            <PlusIcon className="w-[85px] h-[85px] fill-white max-main:hidden mr-8" />
            & Server magic
          </h1>
          <img
            src="/hero/heart.webp"
            alt="heart"
            className="max-mobile:hidden absolute max-md:w-[150px] max-md:h-[145px] max-lg:w-[180px] max-lg:h-[176px] max-main:w-[240px] max-main:h-[235px] w-[260px] h-[255px] max-md:left-10 max-lg:-left-8 max-main:-left-22 -top-20 left-15 -z-10 animate-scalePulse"
          />
          <img
            src="/hero/helmet.webp"
            alt="heart"
            className="max-mobile:hidden absolute max-lg:w-[100px] max-lg:h-[114px] w-[140px] h-[160px] max-md:-top-15 max-lg:-top-15 -top-25 max-md:right-30 max-main:right-5 right-45 animate-floatY z-20"
          />
          <img
            src="/hero/cube.webp"
            alt="heart"
            className="max-mobile:hidden absolute max-md:w-[80px] max-md:h-[80px] max-lg:w-[100px] max-lg:h-[100px] w-[140px] h-[140px] max-lg:-bottom-18 -bottom-22 z-20 animate-spinInfinite"
          />
        </div>
      </main>
      <div className="flex max-mobile:flex-col-reverse h-auto max-mobile:gap-10 gap-24 max-mobile:px-[30px] max-lg:px-[60px] px-[90px]">
        <div className="w-full max-lg:flex-1">
          <div className="h-[3px] mb-10 [background:radial-gradient(circle_closest-side,#252525_98%,rgba(0,0,0,0))_0_0/0.8rem_100%,linear-gradient(90deg,#252525_50%,rgba(0,0,0,0)_0)_calc(0.8rem/2)_0/calc(2*0.8rem)_100%]" />

          <div className="max-md:flex-col max-lg:gap-[30px] max-lg:items-start flex justify-between items-center">
            <div className="relative cursor-pointer">
              <motion.svg
                viewBox="0 0 160 160"
                style={{ rotate }}
                className="w-[160px] h-[160px] fill-white will-change-transform"
              >
                <defs>
                  <path
                    id="textPath"
                    d="M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z"
                  />
                </defs>
                <g>
                  <use href="#textPath" fill="none" />
                  <text>
                    <textPath href="#textPath" className="uppercase text-sm">
                      Scroll for More * Scroll for More * Scroll for More *
                    </textPath>
                  </text>
                </g>
              </motion.svg>
              <img
                src="/hero/spring.webp"
                className="w-[60px] h-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-90 transition-transform duration-300 "
              />
            </div>
            <p className="text-white text-lg max-w-[318px]">
              Crafting scalable, high-performance web apps with React, Next.js,
              Node.js, and AWS
            </p>
            <ul className="text-white text-lg">
              <li className="flex items-center gap-3">
                <PlusIcon className="w-[20px] h-[20px] fill-white" />
                <a href="https://github.com/YashBhakhar" target="_blank">
                  Github
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PlusIcon className="w-[20px] h-[20px] fill-white" />
                <a
                  href="https://www.linkedin.com/in/yash-bhakhar"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PlusIcon className="w-[20px] h-[20px] fill-white" />
                <a
                  href="https://www.instagram.com/yash_bhakhar_/"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-lg:hidden max-mobile:flex max-main:h-[170px] max-mobile:w-full max-main:w-[255px] w-[308px] h-[203px] rounded-[2.6rem] shrink-0 bg-[#cecece] flex items-center justify-center">
          <img
            src="/hero/sphere.gif"
            alt="sphere"
            className="h-[210px] max-main:h-[175px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
