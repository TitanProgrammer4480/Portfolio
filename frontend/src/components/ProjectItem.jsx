import React from 'react'
import Button from './Button';

function ProjectItem({id, name, desc, githubLink, exampleLink, exampleSite}) {

  return (
    <li key={id} className='text-text-c mt-4 mr-4 ml-4 pt-2 pb-2 pl-4 pr-4 rounded-[20px] border-6 border-accent-c border-solid'>
        <h3>{name}</h3>
        <div className='mt-1 mb-1'>
            <Button Text="Code" Link={githubLink} />
            {exampleSite && <Button Text="Demo" Link={exampleLink} />}
        </div>
        <p className='mt-2'>{desc}</p>
    </li>
  )
}

export default ProjectItem
