import React from 'react'

const ProjectSkeleton = () => {
  return (
    <div className='w-full min-h-[100vh] pt-40 pb-40 flex flex-col items-center justify-center bg-base-200'>
      <div className='mb-10'>
        <h2 className='text-3xl overline'>Projects:</h2>
      </div>
      <div className='grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3'>
        <p>Loading...</p>
      </div>
    </div>
  )
}

export default ProjectSkeleton