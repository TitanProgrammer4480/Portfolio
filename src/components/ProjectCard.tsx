import React from 'react'
import { Project } from '../interfaces/project.interface'

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className='card card-morder border-3 w-90 bg-base-100 text-warp'>
        <div className='card-body'>
            <h2 className='card-title'>{project.name}</h2>
            <p>{project.desc}</p>
            <div className='justify-end card-actions'>
                <a href={project.githubLink} target='_blank' className='btn btn-primary'>Github</a>
                {project.demoLink && <a href={project.demoLink} className='btn btn-primary' >Demo</a>}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard