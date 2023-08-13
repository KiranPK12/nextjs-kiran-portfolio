"use client";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";

type ProjectCard = (typeof projectsData)[number];

const ProjectCard = ({ title, description, tags, imageUrl }: ProjectCard) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProcess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProcess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacityProcess,
        scale: scaleProcess,
      }}
      className=" mb-3 sm:mb-6  group"
    >
      <section className=" bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative h-[18rem] sm:h-[20rem] hover:bg-gray-200 transition rounded-lg">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[20rem] gap-7 sm:gap-0">
          <h3 className="text-3xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex gap-2 mt-2 flex-wrap sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full text-white "
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Project Image"
          quality={95}
          className="hidden sm:block sm:absolute top-8 -right-40 w-[30rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-44 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
        />
      </section>
    </motion.div>
  );
};

export default ProjectCard;
