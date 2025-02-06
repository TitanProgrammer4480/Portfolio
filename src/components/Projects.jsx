import React from 'react'
import ProjectItem from './ProjectItem'
import { projects } from "../assets/Constants"

function Projects() {

  const projectList = projects.map((id, name, desc, githubLink, exampleLink,exampleSite) => ProjectItem(id, name, desc, githubLink, exampleLink,exampleSite))

  return (
    <div className='w-full h-screen bg-black text-text-c flex flex-col items-center justify-center snap-start'>
      <div>
        <h2 className='overline'>Projects:</h2>
      </div>
      <ul>
        {projectList}
      </ul>
    </div>
  )
}

export default Projects