import React from 'react'

const Hero = () => {
  return (
    <div className='hero bg-base-200 min-h-screen'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
            <img className='w-120 rounded-xl shadow-2xl' src={"https://imgs.search.brave.com/tb4hxoQ0iNa-L0jcUMGhjpkOfXd30RTmt_4S-teAP6w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/Znc0Zjd0dDljd3Vl/MS5qcGVnP2F1dG89/d2VicCZzPWU0ZThk/NGRhZWE4MjFhZWY0/NTA3MGYyZmIwNDA5/YTg5NjhmYmI5MGY"} />
            <div className='mr-20'>
                <h1 className='text-5xl'>Welcome!</h1>
                <h2 className='text-3xl mt-6'>My name is Sebi.</h2>
                <h2 className='text-3xl mb-6'>I&apos;m a software developer.</h2>
                <a className='btn btn-primary mr-3' href="https://github.com/TitanProgrammer4480" target='_blank'>Github</a>
            </div>
        </div>
    </div>
  )
}

export default Hero