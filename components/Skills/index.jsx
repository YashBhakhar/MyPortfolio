"use client";
import React, { useState } from "react";
import SoftSkill from "./SoftSkill";
import Image from "next/image";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("");

  const categories = ["Backend", "Frontend", "DevOps", "Software"];

  const skills = [
    { name: "HTML", category: "Frontend", icon: "/html.png", color: "#e34f26" },
    { name: "CSS", category: "Frontend", icon: "/css.png", color: "#264de4" },
    { name: "React", category: "Frontend", icon: "/react.png", color: "#dd1b16" },
    { name: "Next", category: "Frontend", icon: "/next.png", color: "#dd1b16" },
    { name: "Javascript", category: "Frontend", icon: "/js.png", color: "#f7df1e" },
    { name: "Typescript", category: "Frontend", icon: "/ts.png", color: "#3178c6" },
    { name: "SCSS (Sass)", category: "Frontend", icon: "/scss.png", color: "#cc6699" },
    { name: "Bootstrap", category: "Frontend", icon: "/bs.png", color: "#7952b3" },
    { name: "NodeJS", category: "Backend", icon: "/node.png", color: "#7952b3" },
    { name: "Git", category: "DevOps", icon: "/git.png", color: "#7952b3" },
    { name: "Postman API", category: "Software", icon: "/postman.png", color: "#7952b3" },
    { name: "VS. Code", category: "Software", icon: "/vscode.png", color: "#7952b3" },
  ];

  const handleCategory = (category) => {
    if (activeCategory === category) {
      setActiveCategory("");
    } else {
      setActiveCategory(category);
    }
  };

  return (
    <div id="skills" className="w-full bg-black text-white sm:px-20 px-5 py-20 border-b border-[#2c3437] overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 relative center-title">Skills</h2>
        <p className="text-xl mb-8">
          <span className="text-white">Expertise</span>{" "}
          <span className="text-gray-400">
            in programming, driven by precision and innovation.
          </span>
        </p>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-16 p-1 rounded-full bg-gray-900/50 backdrop-blur-sm inline-block">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategory(category)}
              className={`sm:px-6 px-3 py-1 rounded-full transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-[#2c3437] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-7xl mx-auto">
          {skills.map((skill, index) => {
            const isActive =
              skill.category === activeCategory || activeCategory === "";
            return (
              <div
                key={index}
                className={`aspect-square relative transition-all duration-500 transform ${
                  isActive ? "opacity-100 scale-100" : "opacity-30 scale-95"
                }`}
              >
                <div className="hexagon-container">
                  <div
                    className={`hexagon bg-[#2c34379b] backdrop-blur-sm border border-gray-700 hover:border-green-500/50 transition-all duration-300`}
                  >
                    <div className="hexagon-content flex flex-col items-center justify-center text-center p-4">
                      <span
                        className="text-2xl mb-2"
                        style={{ color: skill.color }}
                      >
                        {console.log(skill.icon)}
                        
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          className="inset-0 object-cover"
                          width={50}
                          height={50}
                        />
                      </span>
                      <span className="text-sm text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <SoftSkill />

      <style jsx>{`
        .hexagon-container {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .hexagon {
          position: absolute;
          width: 100%;
          height: 100%;
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .hexagon:hover {
          transform: translateY(-5px);
        }

        .hexagon-content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default SkillsSection;
