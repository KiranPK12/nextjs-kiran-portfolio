"use client";
import React from "react";
import SectionHeader from "../Section/SectionHeader";
import { projectsData } from "@/lib/data";
import ProjectCard from "./ProjectCard";

import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects");

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeader label="Projects" />
      <div>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
