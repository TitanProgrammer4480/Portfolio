import { React, useEffect, useState } from 'react'
import { supabase } from "../supabaseClient"
import ProjectItem from './ProjectItem'

function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  async function getProjects() {
    const { data } = await supabase.from("projects").select();
    setProjects(data);
  }

  const projectList = projects.map((id, name, desc, githubLink, exampleLink, exampleSite) => ProjectItem(id, name, desc, githubLink, exampleLink, exampleSite))

  return (
    <div className='w-full min-h-screen bg-black text-text-c flex flex-col items-center justify-center snap-start'>
      <div className='mt-4'>
        <h2 className='overline'>Projects:</h2>
      </div>
      <ul>
        {projectList}
      </ul>
    </div>
  )
}

export default Projects
