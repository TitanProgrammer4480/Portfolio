"use client"

import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Projects from "@/components/Projects"
import Techs from '@/components/Techs'
import React, { useEffect, useState } from 'react'

const HomePage = () => {

  const [projects, setProjects] = useState([]);
  const [techs, setTech] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch('/api/projects');
      const data = await res.json();
      setProjects(data);
    };

    const fetchTech = async () => {
      const res = await fetch('/api/tech');
      const data = await res.json();
      setTech(data);
    };

    fetchProjects();
    fetchTech();
  }, []);

  return (
    <div data-theme="coffee">
      <Hero />
      <Techs techs={techs} />
      <Projects projects={projects} />
      <Footer />
    </div>
  )
}

export default HomePage