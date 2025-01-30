import React from 'react'

export default function Header() {
  return (
    <header className='bg-black text-text-c h-screen w-full flex flex-col items-center justify-center snap-start font-display'>
        <div>
          <h1> { String.fromCodePoint(9866) } Hi, I&apos;m Sebastian { String.fromCodePoint(9866) } </h1>
          <h2>I&apos;m a <span className="text-accent-c">fullstack developer</span> <br /> and have been coding <span className="text-accent-c">since 2019</span>.</h2>
          <a className="bg-accent-c text-text-c inline-block no-underline mt-2 pt-1 pr-5 pb-1 pl-5 border-2 rounded-3xl border-accent-c border-solid" href="https://github.com/TitanProgrammer4480" target="_blank">Github</a>
        </div>
    </header>
  )
}