import React from 'react'
import SectionHeader from '../Section/SectionHeader'
import { projectsData } from '@/lib/data'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section>
        <SectionHeader label='Projects' />
        <div>
            {projectsData.map((project,index)=>(
                <ProjectCard key={index} {...project}/>
            ))}
        </div>
    </section>
  )
}

export default Projects