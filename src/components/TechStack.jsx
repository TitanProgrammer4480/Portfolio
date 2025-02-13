import { React, useEffect, useState } from 'react'
import TechItem from "./TechItem"
import { supabase } from "../supabaseClient"

function TechStack() {

  const [techs, setTechs] = useState([]);

  useEffect(() => {
    getTechs();
  }, []);

  async function getTechs() {
    const { data } = await supabase.from("techs").select();
    setTechs(data);
  }

  const techsList = techs.map((id, name, link, desc) => TechItem(id, name, link, desc))

  return (
    <section className='min-h-screen w-full bg-text-c text-black flex flex-col items-center justify-center snap-start font-display'>
      <div className="w-full h-[5%] bg-black rounded-bl-[100%] rounded-br-[100%]"></div>
      <div className="w-full h-[95%] flex flex-col justify-center items-center">
        <div>
          <h2 className='overline'>Favourite Technologies:</h2>
        </div>
        <ul>
          {techsList}
        </ul>
      </div>
    </section>
  )
}

export default TechStack