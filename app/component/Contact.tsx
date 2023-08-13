"use client";
import React from "react";
import SectionHeader from "./Section/SectionHeader";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const Contact = () => {
    const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
        y:100
      }}
      whileInView={{
        opacity: 1,
        y:0
      }}
      
    >
      <SectionHeader label="Contact Me" />
      <p className="text-gray-700 -mt-4">
        Please Contact me directly at{" "}
        <a className="underline" href="mailto:kiranpadma2003@gmail.com">
          kiranpadma2003@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col">
        <input
          type="text"
          placeholder="Your Email"
          className="h-14 rounded-lg border border-black/10 px-4"
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-4"
          placeholder="Your Message"
        />
        <button
          type="submit"
          className=" group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex items-center justify-center gap-3 hover:scale-110 active:scale-105"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
