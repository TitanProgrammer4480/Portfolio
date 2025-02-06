import React from 'react'
import TechItem from "./TechItem"
import { techs } from "../assets/Constants"

function TechStack() {

  const list = techs.map((id, name, link, desc) => TechItem(id, name, link, desc))

  return (
    <section className='h-screen w-full bg-text-c text-black flex flex-col items-center justify-center snap-start font-display'>
      <div className="w-full h-[5%] bg-black rounded-bl-[100%] rounded-br-[100%]"></div>
      <div className="w-full h-[95%] flex flex-col justify-center items-center">
        <div>
          <h2 className='overline'>Favourite Technologies:</h2>
        </div>
        <ul>
          {list}
        </ul>
      </div>
    </section>
  )
}

export default TechStack