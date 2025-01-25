import React from 'react'

export default function Header() {
  return (
    <header className='bg_color t_color h-screen w-full flex flex-col items-center justify-center snap-start'>
        <div>
          <h1> { String.fromCodePoint(9866) } Hi, I&apos;m Sebastian { String.fromCodePoint(9866) } </h1>
          <h2>I&apos;m a <span className="ac_color">fullstack developer</span> <br /> and have been coding <span className="ac_color">since 2019</span>.</h2>
          <a className="h-20 bg-[#007FFF] text-[#f5f5f0] no-underline pt-5 pr-15 pb-5 pl-15 border-2 rounded-3xl border-[#007FFF] border-solid" href="https://github.com/TitanProgrammer4480" target="_blank">Github</a>
        </div>
        <div id="navbar">
          <a class="btn" href="#tech-stack">Tech Stack</a>
          <a class="btn" href="#projects">Project</a>
        </div>
    </header>
  )
}