'use client'
import { projectsData } from "@/lib/data";
import Image from "next/image";
import React from "react";

type ProjectCard = (typeof projectsData)[number];

const ProjectCard = ({title,description,tags,imageUrl}:ProjectCard) => {
  return <section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative">
    <h3 className="text-3xl font-semibold">{title}</h3>
    <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
    <ul className="flex gap-2 mt-2 flex-wrap">{tags.map((tag,index)=>(
        <li key={index} className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full text-white ">{tag}</li>
    ))}</ul>
    <Image src={imageUrl} alt="Project Image" quality={95} className="absolute top-8 -right-40"/>
  </section>;
};

export default ProjectCard;
