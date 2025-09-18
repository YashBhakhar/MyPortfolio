'use client'

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedButton from "../common/AnimatedButton";
import PlusIcon from "../Icons/PlusIcon";
import CountUpOnView from "../common/CountUpOnView";

const AnimatedCard = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 1.05, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className} // keep your original styles
    >
      {children}
    </motion.div>
  );
};


const Clients = () => {
  return (
    <div className="main-wrapper flex flex-wrap my-[160px] max-main:my-[140px] max-lg:my-[120px] max-md:my-[100px] max-mobile:!px-[30px]">
      <AnimatedCard className="px-[15px] max-lg:px-0 max-lg:w-[100%] w-[41%]">
        <div className=" relative overflow-hidden flex items-end max-md:gap-[36px] max-md:items-start max-md:justify-start justify-between flex-col max-md:px-[30px] max-md:py-[26px] px-[40px] py-[36px] h-[600px] bg-[#DDF160] rounded-[26px] max-md:rounded-[16px] max-main:h-[420px] max-md:h-[540px]">
          <div className="flex z-10 max-md:items-start items-end max-md:text-left text-right gap-[10px] flex-col">
            <p className="text-[120px] max-main:text-[90px] max-lg:text-[70px] font-medium leading-[normal] ">
              <CountUpOnView target={5} duration={0.5} />+
            </p>
            <p className="max-w-[250px] text-[22px] max-main:text-lg ">
              Happy clients who
              <br /> trust my work
            </p>
          </div>
          <AnimatedButton
            text="Reviews"
            className="!text-black hover:!text-white fill-button-client !border-black "
            textHidden={false}
            href="#review"
            dataCursor={"pointer"}
          />
          <img
            src="/hero/silverStar.webp"
            className="w-auto absolute -left-[40px] max-md:left-0 top-0 max-lg:-top-[40px] max-md:top-[320px] h-[470px] max-main:h-[330px] max-lg:h-[470px] max-md:h-[360px] max-mobile:h-[260px] "
          />
        </div>
      </AnimatedCard>
      <AnimatedCard  className="px-[15px] max-lg:px-0 max-lg:mt-[30px] max-lg:w-[100%] w-[59%]">
        <div className="relative h-[600px] overflow-hidden flex max-md:gap-[36px] max-md:items-start max-md:justify-start items-end justify-between flex-col max-main:h-[420px] bg-[#1c1c1c] max-md:rounded-[16px] rounded-[26px] bg max-md:h-[540px] max-md:px-[30px] max-md:py-[26px] px-[40px] py-[36px]">
          <div className="bg-[#FAF7F6] w-20 h-20 rounded-full flex justify-center items-center">
            <PlusIcon className="w-[40px] h-[40px] fill-[#9F8BE7]" />
          </div>
          <div className="flex z-10 text-white max-md:items-start items-end max-md:text-left text-right gap-[10px] flex-col">
            <p className="text-[120px] max-main:text-[90px] font-medium max-lg:text-[70px] leading-[normal] ">
              <CountUpOnView target={80} duration={0.5} />%
            </p>
            <p className="max-w-[250px] text-[22px] max-main:text-lg ">
              Clients come back for
              <br /> a new project
            </p>
          </div>
          <img
            src="/hero/client_project.png"
            className="absolute w-[620px] max-md:w-[450px] bottom-0 -left-20 "
          />
        </div>
      </AnimatedCard>
      <AnimatedCard  className="px-[15px] max-lg:px-0 mt-[30px] max-lg:w-[100%] w-[59%]">
        <div className="relative h-[600px] overflow-hidden flex max-md:gap-[36px] max-md:items-start max-md:justify-start items-start justify-between flex-col max-main:h-[420px] bg-[#1c1c1c] max-md:rounded-[16px] rounded-[26px] max-md:h-[540px] max-md:px-[30px] max-md:py-[26px] px-[40px] py-[36px]">
          <div className="flex z-10 items-start text-white text-left gap-[10px] flex-col">
            <p className="text-[120px] max-main:text-[90px] font-medium max-lg:text-[70px] leading-[normal] ">
              <CountUpOnView target={3} duration={0.5} />+
            </p>
            <p className="max-w-[250px] text-[22px] max-main:text-lg ">
              Years of professional
              <br /> experience in creating
              <br /> digital products
            </p>
          </div>
          <AnimatedButton text="Connect" textHidden={false} href="#contact" />
          <img
            src="/hero/robo.webp"
            className="absolute max-md:w-[360px] w-[420px] max-md:right-auto max-md:left-0 max-md:-bottom-40 bottom-0 -right-5 "
          />
        </div>
      </AnimatedCard>
      <AnimatedCard  className="px-[15px] max-lg:px-0 mt-[30px] max-lg:w-[100%] w-[41%]">
        <div className="relative h-[600px] overflow-hidden flex max-md:gap-[36px] max-md:items-start max-md:justify-start items-start justify-between flex-col max-main:h-[420px] bg-[#1c1c1c] max-md:rounded-[16px] rounded-[26px] max-md:h-[540px] max-md:px-[30px] max-md:py-[26px] px-[40px] py-[36px]">
          <div className="flex z-10 items-start text-white text-left gap-[10px] flex-col">
            <p className="text-[120px] max-main:text-[90px] font-medium max-lg:text-[70px] leading-[normal] ">
              <CountUpOnView target={10} duration={0.5} />+
            </p>
            <p className="max-w-[250px] text-[22px] max-main:text-lg ">
              Successfully
              <br /> completed projects
            </p>
          </div>
          <AnimatedButton text="Works" textHidden={false} href="#projects" />
          <img
            src="/hero/helmet.webp"
            className="absolute max-md:w-[320px] w-[200px] bottom-10 max-md:right-auto max-md:left-5 max-md:-bottom-35 -right-5 "
          />
        </div>
      </AnimatedCard>
    </div>
  );
};

export default Clients;
