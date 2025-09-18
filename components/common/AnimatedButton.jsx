"use client";
import { GoArrowUpRight } from "react-icons/go";

const AnimatedButton = ({
  text = "Say Hello",
  Icon = GoArrowUpRight,
  className = "",
  textHidden = true,
  spanClass = "",
  href = "",
  dataCursor,
}) => {
  // Split text, keep spaces as non-breaking space
  const letters = text.split(/( )/).map((ch) => (ch === " " ? "\u00A0" : ch));

  return (
    <a
      href={href}
      className={`${className} fill-button w-fit ${textHidden && "max-md:w-[46px] max-md:h-[46px] max-md:justify-center max-md:items-center max-md:pr-0"} relative group border-2 flex gap-[10px] text-white items-center pr-[22px] border-white rounded-full overflow-hidden`}
      data-cursor={dataCursor || "pointer2"}
    >
      <span
        className={`${spanClass} contact-button ${textHidden && "max-md:!hidden"}`}
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
      <Icon
        className="relative stroke-1 z-10 transition-all duration-600 group-hover:opacity-0 group-hover:translate-x-[22px] group-hover:-translate-y-[22px]"
        size={24}
      />
      <Icon
        className="absolute stroke-1 max-md:right-aut right-[22px] opacity-0 translate-x-[-22px] translate-y-[22px] transition-all duration-600 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
        size={24}
      />
    </a>
  );
};

export default AnimatedButton;
