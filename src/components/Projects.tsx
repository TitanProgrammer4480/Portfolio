import React from 'react'
import ProjectCard from './ProjectCard';
import { Project } from '../interfaces/project.interface';

const Projects = ({ projects }: { projects: Project[] }) => {
    
  const projectList = projects.map((project, index) => <ProjectCard key={index} project={project} />);

  return (
    <div className='w-full min-h-[100vh] pt-40 pb-40 flex flex-col items-center justify-center bg-base-200'>
      <div className='mb-10'>
        <h2 className='text-3xl overline'>Projects:</h2>
      </div>
      <div className='grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3'>
        {projectList}
      </div>
    </div>
  )
}

export default Projects