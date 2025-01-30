import React from 'react'

function TechItem({id, name, link, desc}) {
  return (
    <li key={id} className="mt-4 pt-2 pb-2 pl-10 pr-10 bg-white rounded-[20px]">
        <h3 className='underline'><a href={link} target="_blank">{name}</a></h3>
        <p>{desc}</p>
    </li>
  )
}

export default TechItem