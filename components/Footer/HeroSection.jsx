import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";

const textContent = ["Let's talk about your project!"];

const HeroSection = ({ tab }) => {
  const ref = useRef(null);
  const cardRef = useRef(null);

  const letters = "Contact Us"
    .split(/( )/)
    .map((ch) => (ch === " " ? "\u00A0" : ch));

  const { scrollYProgress: scrollProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0.5"],
  });

  // Card animation scroll progress
  const { scrollYProgress: cardScrollProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"], // Track from when card starts entering until it leaves
  });

  const smoothProgress = useSpring(scrollProgress, {
    stiffness: 50,
    damping: 25,
    mass: 1,
  });

  // Smooth card animation progress
  const smoothCardProgress = useSpring(cardScrollProgress, {
    stiffness: 180,
    damping: 35,
    mass: 0.4,
  });

  // Transform values for card animation
  // Scale: starts at 1.1, goes to 1.0 when fully in view, back to 1.1 when scrolling up
  const cardScale = useTransform(smoothCardProgress, [0.1, 0.4], [1.14, 1.0]);

  // Border radius: starts high, reduces to normal, then increases again
  const cardRadius = useTransform(
    smoothCardProgress,
    [0.1, 0.4],
    [tab ? "100px" : "200px", tab ? "30px" : "50px"]
  );

  // Combined transform string
  const cardTransform = useTransform(cardScale, (scale) => `scale(${scale})`);

  return (
    <div className="mt-[160px] max-main:mt-[140px] max-lg:mt-[120px] max-md:mt-[100px] main-wrapper max-mobile:!px-[30px]">
      <motion.div
        ref={cardRef}
        style={{
          transform: cardTransform,
          borderRadius: cardRadius,
        }}
        className="relative w-full flex flex-col overflow-hidden bg-[#FAF7F6] max-mobile:px-[30px] max-lg:px-[50px] max-main:px-[60px] px-[90px]"
      >
        <div className="blur-bg absolute max-lg:-top-[40px] max-mobile:-right-[175px] max-lg:-right-[100px] top-0 right-0 bg-center bg-no-repeat bg-cover max-mobile:w-[88%] max-lg:w-[70%] w-1/2" />
        <div className="my-[176px] max-main:my-[140px] max-mobile:my-[120px] z-10">
          <div ref={ref} className="mb-[60px]">
            {textContent.map((para, pIdx) => {
              const words = para.split("");
              return (
                <motion.p
                  key={pIdx}
                  className="text-[100px] max-lg:text-[80px] max-mobile:text-[44px] leading-[normal] max-mobile:max-w-[250px] max-md:max-w-[450px] max-lg:max-w-[720px] max-w-[850px] font-medium text-[#161616] whitespace-pre-wrap"
                >
                  <span className="inline-block align-middle mb-[10px] mr-[15px]">
                    <img
                      src="/hero/heart-silver.webp"
                      className="w-[70px] h-[70px] max-mobile:w-[34px] max-mobile:h-[34px]"
                    />
                  </span>

                  {words.map((word, i) => {
                    const globalIndex = pIdx * 100 + i; // unique per paragraph
                    const start =
                      globalIndex / (words.length * textContent.length * 1.5);
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
          <a
            href="#contact"
            data-cursor={"pointer"}
            className={`relative fill-button-footer w-fit group border-2 flex gap-[10px] text-white items-center pr-[22px] border-[#9F8BE7] bg-[#9F8BE7] rounded-full overflow-hidden`}
          >
            <span
              className={`contact-button max-md:!h-[56px] !h-[84px] max-md:!w-[140px] !w-[185px] max-md:!text-[22px] !text-[30px]`}
            >
              <span className="span-mother">
                {letters.map((ch, i) => (
                  <span key={`top-${i}`}>{ch}</span>
                ))}
              </span>
              <span className="span-mother2">
                {letters.map((ch, i) => (
                  <span key={`bottom-${i}`}>{ch}</span>
                ))}
              </span>
            </span>

            {/* Animated icons */}
            <GoArrowUpRight
              className="relative stroke-1 z-10 transition-all duration-600 group-hover:opacity-0 group-hover:translate-x-[22px] group-hover:-translate-y-[22px]"
              size={30}
            />
            <GoArrowUpRight
              className="absolute stroke-1 max-md:right-aut right-[22px] opacity-0 translate-x-[-22px] translate-y-[22px] transition-all duration-600 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
              size={30}
            />
          </a>
        </div>
        <div className="absolute top-0 right-0 w-[46%] flex h-full max-lg:hidden">
          <img
            src="/hero/helmet.webp"
            className="h-auto w-[396px] max-main:w-[330px] absolute max-main:right-[60px] max-main:bottom-[60px] right-[90px] bottom-[90px] "
          />
          <img
            src="/hero/spring.webp"
            className="h-auto w-[140px] max-main:w-[120px] absolute left-[60px] max-main:bottom-[120px] bottom-[180px]"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
