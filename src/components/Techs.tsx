import React from 'react'
import TechCard from './TechCard';
import { Tech } from '../interfaces/tech.interface';

const Techs = ({ techs }: { techs: Tech[]}) => {
  const cards = techs.map((tech, index) => <TechCard key={index} tech={tech} />);

  return (
    <div className='w-full h-[100vh] mt-20 flex flex-col items-center justify-center'>
      <div className='mb-10'>
        <h2 className='text-3xl overline'>My favourite tech:</h2>
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3'>
        {cards}
      </div>
    </div>
  )
}

export default Techs