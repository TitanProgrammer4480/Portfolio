"use client"

import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Projects from "@/components/Projects"
import Techs from '@/components/Techs'
import React, { useEffect, useState } from 'react'
import ProjectSkeleton from '@/components/skeletons/ProjectSkeleton'
import TechSkeleton from '@/components/skeletons/TechSkeleton'

const HomePage = () => {

  const [projects, setProjects] = useState([]);
  const [techs, setTech] = useState([]);
  const [techLoading, setTechLoading] = useState(true);
  const [projectLoading, setProjectLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch('/api/project');
      const data = await res.json();
      setProjects(data);
      setProjectLoading(false);
    };

    const fetchTech = async () => {
      const res = await fetch('/api/tech');
      const data = await res.json();
      setTech(data);
      setTechLoading(false);
    };

    fetchProjects();
    fetchTech();
  }, [])

  return (
    <div data-theme="coffee">
      <Hero />
      {techLoading ? <TechSkeleton /> : <Techs techs={techs} />}
      {projectLoading ? <ProjectSkeleton /> : <Projects projects={projects} />}
      <Footer />
    </div>
  )
}

export default HomePage