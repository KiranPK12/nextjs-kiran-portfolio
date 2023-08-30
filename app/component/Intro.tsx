"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsGit } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { SiNextdotjs } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import {
  BiLogoTailwindCss,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoPostgresql,
} from "react-icons/bi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const Intro = () => {
  const { ref } = useSectionInView("Home");
  const { setTimeOfLastClick, setActiveSelection } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28"
    >
      <div className="flex items-center justify-center">
        <div className="relative mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/kiran.JPG"
              alt="Logo"
              height={192}
              width={192}
              quality={95}
              priority={true}
              className="w-24 h-24 rounded-full object-cover border-[0.35rem] shadow-xl border-white"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold leading-6">Hello, I&apos;m Kiran.</span> I&apos;m a{" "}
        <span className="font-bold leading-6">Full-stack developer.</span>{" "}
        <span className="font-bold leading-6"></span> I enjoy building{" "}
        <span className="italic leading-6">web sites & web applications</span>. My focus
        is
        <span className="underline"> React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex text-center items-center justify-evenly my-16"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <p className="md:font-semibold md:tracking-wider hidden ">Tech Stack :</p>
        <BiLogoReact className="md:text-5xl text-[#61dbfb] hover:scale-[1.15] transition text-3xl" />
        <BiLogoTailwindCss className="md:text-5xl text-[#3490dc] hover:scale-[1.15] transition text-3xl" />
        <SiNextdotjs className="md:text-5xl dark:text-white hover:scale-[1.15]  transition text-3xl" />
        <BiLogoTypescript className="md:text-5xl text-[#007acc] hover:scale-[1.15] transition text-3xl" />
        <BiLogoMongodb className="md:text-5xl text-[#589636] hover:scale-[1.15] transition text-3xl" />
        <BsGit className="md:text-5xl text-[#f34f29] hover:scale-[1.15] transition text-3xl" />
        <BiLogoPostgresql className="md:text-5xl text-[#0064a5] hover:scale-[1.15] transition text-3xl" />
      </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 px-4 text-lg font-medium justify-center items-center mt-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className=" group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setTimeOfLastClick(Date.now());
            setActiveSelection("Contact");
          }}
        >
          Contact Me here{" "}
          <BsArrowRight className="opacity-60 group-hover:translate-x-2" />
        </Link>

        <a
          className="group bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          href="/CV.pdf"
          download={true}
        >
          Download CV{" "}
          <HiDownload className="group-hover:translate-y-1 opacity-80 transition" />
        </a>

        <div className="flex gap-4">
          <a
            href="https://github.com/KiranPK12"
            target="_blank"
            className="bg-white p-4 flex items-center gap-2 rounded-full text-gray-700 text-[1.35rem] outline-none hover:scale-[1.15] hover:text-gray-900 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          >
            <FaGithubSquare />
          </a>
          <a
            href="#"
            target="_blank"
            className="bg-white p-4 flex items-center gap-2 rounded-full text-gray-700 outline-none hover:scale-[1.15] hover:text-gray-900 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          >
            <BsLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
