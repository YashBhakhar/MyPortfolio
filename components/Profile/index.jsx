"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Profile = () => {
  const { scrollY } = useScroll();

  const [base, setBase] = useState(-581);
  useEffect(() => {
    const set = () =>
      setBase(
        window.innerWidth < 441
          ? -350
          : window.innerWidth < 769
          ? -400
          : window.innerWidth < 1201
          ? -500
          : window.innerWidth < 1601
          ? -600
          : -801
      );
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  const parallaxFactor = 0.2;

  const y = useTransform(scrollY, (v) => base + v * parallaxFactor);

  return (
    <div className="text-white main-wrapper">
      <div className="max-mobile:h-[210px] max-md:h-[460px] max-lg:h-[600px] max-main:h-[760px] h-[930px] overflow-hidden relative my-[160px] max-main:my-[140px] max-lg:my-[120px] max-md:my-[100px] rounded-4xl">
        <motion.img
          src="/hero/gemini1.png"
          className="bg-profile w-full h-full will-change-transform transform-gpu"
          style={{ y }}
        />
      </div>
    </div>
  );
};

export default Profile;
