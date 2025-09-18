import React from "react";
import { motion } from "framer-motion";

export const techs = [
  { logo: "/tech/tech3.png", title: "react" },
  { logo: "tech/tech2.png" },
  { logo: "tech/tech4.png" },
  { logo: "tech/tech5.png" },
  { logo: "tech/tech6.png" },
  { logo: "tech/tech7.png" },
  { logo: "tech/tech8.png" },
  { logo: "tech/tech10.png" },
  { logo: "tech/tech11.png" },
  { logo: "tech/tech12.png" },
  { logo: "tech/tech1.png" },
  { logo: "tech/tech9.png" },
];

const Skills = () => {
  return (
    <div className="main-wrapper flex flex-wrap" id="skills">
      {techs.map((tech, index) => (
        <motion.div
          key={index}
          className="w-1/4 max-lg:w-1/2 max-mobile:w-full px-[15px] mt-[30px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.04 }}
        >
          <div className="bg-[#1c1c1c] flex justify-center items-center rounded-[26px] max-mobile:h-[150px] max-lg:h-[180px] h-[250px]">
            <img
              src={tech.logo}
              className="max-main:max-h-[65px] max-h-[80px] w-auto"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
