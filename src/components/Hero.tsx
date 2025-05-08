import React from 'react'

const Hero = () => {
  return (
    <div className='hero bg-base-200 min-h-screen'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
            <div className='mr-20'>
                <h1 className='text-5xl'>{ String.fromCodePoint(9866) } Hi, My name is Sebi. { String.fromCodePoint(9866) }</h1>
                <h2 className='text-3xl'>I&apos;m a software developer</h2>
                <h2 className='text-3xl mb-6'>and have been coding since 2019.</h2>
                <a className='btn btn-primary mr-3' href="https://github.com/TitanProgrammer4480" target='_blank'>Github</a>
            </div>
        </div>
    </div>
  )
}

export default Hero