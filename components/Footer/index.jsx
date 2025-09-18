import React, { useRef, useState } from "react";
import PlusIcon from "../Icons/PlusIcon";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    note: "",
  });
  const targetRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const letters = "Submit"
    .split(/( )/)
    .map((ch) => (ch === " " ? "\u00A0" : ch));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success) {
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        note: "",
      });
    }
    setLoading(false);
  };

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-322.109, 0, 0]
  );

  const springY = useSpring(translateY, {
    stiffness: 180,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <footer className="main-wrapper max-mobile:!px-[30px] pb-[60px]">
      <motion.div
        ref={targetRef}
        className="pt-[110px] -z-20 relative"
        style={{ y: springY }}
      >
        <img src="/user/yashcrafts.svg" className="w-full h-auto" />
      </motion.div>
      <div className="flex max-lg:flex-col gap-[30px]">
        <div className="flex-1/3 h-[650px] bg-[#1c1c1c] rounded-[26px] max-mobile:p-[30px] p-[50px]">
          <ul className="space-y-[16px] max-mobile:text-[30px] text-[44px] font-medium text-white">
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <a href="#intro">Intro</a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <a href="#whoami">Who am I</a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <a href="#projects" className="flex items-center gap-[12px]">
                Projects{" "}
                <p className="h-[36px] flex items-center gap-[4px] bg-[#DDF160] px-[12px] rounded-full text-[22px] font-semibold text-black ">
                  <PlusIcon className="h-[15px] w-[15px]" />
                  10
                </p>
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <a href="#company">Career</a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <a href="#review">Client Review</a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <a href="#skills">Skills</a>
            </motion.li>
          </ul>
        </div>
        <div
          className="flex-2/3 h-[650px] bg-[#1c1c1c] rounded-[26px] max-mobile:p-[30px] p-[50px] "
          id="contact"
        >
          <form className="flex flex-wrap" onSubmit={handleSubmit}>
            <div className=" px-[15px] max-mobile:w-full max-mobile:flex-none flex-1/2 ">
              <input
                type="text"
                placeholder="Your name*"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                required
                className="py-[12px] text-[22px] w-full text-white focus-visible:outline-none px-[2px] border-b-2 border-[#646464] "
              />
            </div>
            <div className=" px-[15px] max-mobile:w-full max-mobile:flex-none max-mobile:mt-[15px] flex-1/2 ">
              <input
                type="text"
                placeholder="Company name"
                value={formData.company}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, company: e.target.value }))
                }
                className="py-[12px] text-[22px] w-full text-white focus-visible:outline-none px-[2px] border-b-2 border-[#646464] "
              />
            </div>
            <div className="mt-[30px] px-[15px] max-mobile:w-full max-mobile:flex-none max-mobile:mt-[15px] flex-1/2 ">
              <input
                type="email"
                placeholder="Email*"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                required
                className="py-[12px] text-[22px] w-full text-white focus-visible:outline-none px-[2px] border-b-2 border-[#646464] "
              />
            </div>
            <div className="mt-[30px] px-[15px] max-mobile:w-full max-mobile:flex-none max-mobile:mt-[15px] flex-1/2 ">
              <input
                type="text"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="py-[12px] text-[22px] w-full text-white focus-visible:outline-none px-[2px] border-b-2 border-[#646464] "
              />
            </div>
            <div className="mt-[30px] px-[15px] w-full max-mobile:mt-[15px]">
              <textarea
                placeholder="A few words about your project*"
                value={formData.note}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, note: e.target.value }))
                }
                required
                className="py-[12px] text-[22px] max-mobile:h-[160px] h-[230px] w-full text-white focus-visible:outline-none px-[2px] border-b-2 border-[#646464] "
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              data-cursor={"pointer2"}
              className={`relative mt-[30px] max-mobile:mt-[15px] group border-2 flex gap-[10px] text-black items-center pr-[22px] border-white bg-white rounded-full overflow-hidden`}
            >
              <span
                className={`contact-button max-mobile:!h-[56px] !h-[60px] !w-[130px] max-mobile:!text-[22px] !text-[30px]`}
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
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
