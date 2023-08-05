"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
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
      <motion.p
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
        <span className="font-bold">Full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is
        <span className="underline"> React (Next.js)</span>.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 px-4 text-lg font-medium justify-center items-center "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className=" group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact Me here{" "}
          <BsArrowRight className="opacity-60 group-hover:translate-x-2" />
        </Link>

        <a
          className="group bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
          href="/CV.pdf"
          download={true}
        >
          Download CV{" "}
          <HiDownload className="group-hover:translate-y-1 opacity-80 transition" />
        </a>

        <a
          href="#"
          target="_blank"
          className="bg-white p-4 flex items-center gap-2 rounded-full text-gray-700 outline-none hover:scale-[1.15] hover:text-gray-900 active:scale-105 transition cursor-pointer border border-black/10"
        >
          <BsLinkedin />
        </a>

        <a
          href="#"
          target="_blank"
          className="bg-white p-4 flex items-center gap-2 rounded-full text-gray-700 text-[1.35rem] outline-none hover:scale-[1.15] hover:text-gray-900 active:scale-105 transition cursor-pointer border border-black/10"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
