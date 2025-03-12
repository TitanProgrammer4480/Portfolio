import React from 'react'
import Button from './Button'

export default function Header() {
  return (
    <header className='bg-black text-text-c min-h-screen w-full flex flex-col items-center justify-center snap-start font-display'>
        <div>
          <h1> { String.fromCodePoint(9866) } Hi, I&apos;m Sebastian { String.fromCodePoint(9866) } </h1>
          <h2>I&apos;m a <span className="text-accent-c">fullstack developer</span> <br /> and have been coding <span className="text-accent-c">since 2019</span>.</h2>
          <div className='mt-2'>
            <Button Link="https://github.com/TitanProgrammer4480" Text="Github" />
          </div>
        </div>
    </header>
  )
}