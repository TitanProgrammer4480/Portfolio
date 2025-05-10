import React from 'react'
import { Tech } from '../interfaces/tech.interface'

const TechCard = ({ tech }: { tech: Tech }) => {
  return (
    <div className='card card-border w-90 bg-base-100 text-wrap'>
        <div className='card-body'>
            <h2 className='card-title'>{tech.name}</h2>
            <p>{tech.desc}</p>
            <div className='justify-end card-actions'>
                <a href={tech.link} target='_blank' className='btn btn-primary' >Website</a>
            </div>
        </div>
    </div>
  )
}

export default TechCard