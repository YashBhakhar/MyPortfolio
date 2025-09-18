import Image from "next/image";
import React from "react";
import AnimatedButton from "../common/AnimatedButton";

const Header = () => {
  return (
    <header className="relative z-20 flex justify-between items-center max-md:px-[30px] max-lg:px-[60px] px-[90px] ">
      <div className="flex items-center space-x-3">
        <div className="max-md:rounded-[18px] rounded-[22px] max-md:w-[46px] max-md:h-[46px] w-[56px] h-[56px] bg-white flex items-center justify-center">
          <Image src={"/hero/logo.png"} width={36} height={36} alt="logo" />
        </div>
        <div>
          <h1 className="max-md:text-xl text-2xl font-medium leading-[normal] text-white">
            yash
          </h1>
          <p className="max-md:text-xl text-2xl font-medium leading-[normal] text-white">
            bhakhar
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <AnimatedButton href="#contact" dataCursor="pointer2" />
        {/* <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer"></div> */}
      </div>
    </header>
  );
};

export default Header;
