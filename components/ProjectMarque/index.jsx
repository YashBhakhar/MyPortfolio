import React from "react";
import StackMarque from "../StackMarque";

const ProjectMarque = () => {
  const data = [
    {
      img: "/project/molimor2.webp",
    },
    {
      img: "/project/devops.webp",
    },
    {
      text: (
        <p className="px-[40px] py-[36px] text-[50px] max-w-[210px] block">
          Creative <br /> Mind
        </p>
      ),
    },
    {
      img: "/project/sundance2.webp",
    },
    {
      img: "/project/mern.webp",
    },
    {
      text: (
        <p className="px-[40px] py-[36px] text-[50px] max-w-[210px] block">
          Inspiring <br /> Ideas
        </p>
      ),
    },
    {
      img: "/project/easysell.webp",
    },
    {
      img: "/project/robo.webp",
    },
    {
      text: (
        <p className="px-[40px] py-[36px] text-[50px] max-w-[210px] block">
          Innovative <br /> Vision
        </p>
      ),
    },
  ];
  return (
    <div className="my-[160px] max-main:my-[140px] max-lg:my-[120px] max-md:my-[100px] ">
      <StackMarque>
        {data.map((d, i) => (
          <div className="mr-[30px] max-md:mr-[15px] max-mobile:w-[320px] max-mobile:h-[250px] max-md:w-[430px] max-md:h-[320px] max-lg:w-[490px] max-lg:h-[360px] max-main:w-[540px] max-main:h-[400px] w-[730px] h-[540px] overflow-hidden rounded-[26px] bg-[#DDF160] flex items-end justify-start" key={i}>
            {d.img ? (
              <img src={d.img} className="object-cover h-full w-full" />
            ) : (
              d.text
            )}
          </div>
        ))}
      </StackMarque>
      <StackMarque direction="left">
        {data.map((d, i) => (
          <div className="mr-[30px] max-md:mr-[15px] mt-[30px] max-md:mt-[15px] max-mobile:w-[320px] max-mobile:h-[250px] max-md:w-[430px] max-md:h-[320px] max-lg:w-[490px] max-lg:h-[360px] max-main:w-[540px] max-main:h-[400px] w-[730px] h-[540px] overflow-hidden rounded-[26px] bg-[#DDF160] flex items-end justify-start" key={i}>
            {d.img ? (
              <img src={d.img} className="object-cover h-full w-full" />
            ) : (
              d.text
            )}
          </div>
        ))}
      </StackMarque>
    </div>
  );
};

export default ProjectMarque;
