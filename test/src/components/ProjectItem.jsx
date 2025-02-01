import React from 'react'

function ProjectItem({id, name, desc, githubLink, exampleLink, exampleSite}) {
  return (
    <li key={id} className='text-text-c mt-4 pt-2 pb-2 pl-10 pr-10 rounded-[20px] border-6 border-accent-c border-solid'>
        <h3>{name}</h3>
        <div>
            <a href={githubLink} target="_blank" className="bg-accent-c text-text-c inline-block no-underline mt-2 pt-1 pr-5 pb-1 pl-5 border-2 rounded-3xl border-accent-c border-solid">Code</a>
            {() => {
              if(exampleSite) {
                <a href={exampleLink} target="_blank" className="bg-accent-c text-text-c inline-block no-underline mt-2 pt-1 pr-5 pb-1 pl-5 border-2 rounded-3xl border-accent-c border-solid">Demo</a>
            }}}
        </div>
        <p>{desc}</p>
    </li>
  )
}

export default ProjectItem