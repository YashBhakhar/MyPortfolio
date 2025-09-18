"use client";

import CLientReview from "@/components/CLientReview";
import Clients from "@/components/Clients";
import CustomCursor from "@/components/common/CustomCursor";
import SmoothScrollProvider from "@/components/common/SmoothScrollLayout";
import Company from "@/components/Company";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Footer/HeroSection";
import Hero from "@/components/Hero";
import PlusIcon from "@/components/Icons/PlusIcon";
import Profile from "@/components/Profile";
import ProjectMarque from "@/components/ProjectMarque";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import StackMarque from "@/components/StackMarque";
import WhoAmI from "@/components/WhoAmI";
import { useIsLaptop, useIsMobile } from "@/customHook/screen-hooks";

export default function Home() {
  const main = useIsMobile(1600);
  const laptop = useIsLaptop();
  const tab = useIsMobile(769);
  const mobile = useIsMobile();
  return (
    <>
      <CustomCursor />
      <SmoothScrollProvider>
        <Hero />
        <Profile />
        <WhoAmI />
        <Clients />
        <StackMarque direction="left">
          {["eCommerce", "Mobile App", "Development", "Design", "devOps"].map(
            (d) => (
              <div
                className="pr-[30px] max-md:pr-[18px] flex items-center "
                key={d}
              >
                <p className="text-[#535151] max-md:text-[60px] max-md:mr-[16px] text-[120px] mr-[36px]">
                  {d}
                </p>
                <PlusIcon className="w-[80px] h-[80px] max-md:w-10 max-md:h-10 fill-[#535151]" />
              </div>
            )
          )}
        </StackMarque>
        <Projects laptop={laptop} tab={tab} mobile={mobile} />
        <Company />
        <ProjectMarque />
        <CLientReview main={main} laptop={laptop} tab={tab} mobile={mobile} />
        <div className="my-[160px] max-main:my-[140px] max-lg:my-[120px] max-md:my-[100px]">
          <StackMarque direction="left">
            {["My Strengths", "My Expertise", "My Proficiency"].map((d) => (
              <div
                className="pr-[30px] max-md:pr-[18px] flex items-center "
                key={d}
              >
                <p className="text-[#535151] max-md:text-[60px] max-md:mr-[16px] text-[120px] mr-[36px]">
                  {d}
                </p>
                <PlusIcon className="w-[80px] h-[80px] max-md:w-10 max-md:h-10 fill-[#535151]" />
              </div>
            ))}
          </StackMarque>
        </div>
        <Skills />
        <HeroSection tab={tab} />
        <Footer />
      </SmoothScrollProvider>
    </>
  );
}
