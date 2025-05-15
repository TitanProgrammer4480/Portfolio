import React from 'react'

const ProjectSkeleton = () => {
  return (
    <div className='w-full min-h-[100vh] pt-40 pb-40 flex flex-col items-center justify-center bg-base-200'>
      <div className='mb-10'>
        <h2 className='text-3xl overline'>Projects:</h2>
      </div>
      <div className='grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 animate-pulse'>
        <div className='card card-morder border-3 w-90 bg-base-100 text-warp'>
            <div className='card-body'>
                <h2 className='card-title'>Loading...</h2>
                <p>Loading...</p>
                <div className='justify-end card-actions'>
                    <a target='_blank' className='btn btn-primary'>Loading...</a>
                </div>
            </div>
        </div>
        <div className='card card-morder border-3 w-90 bg-base-100 text-warp'>
            <div className='card-body'>
                <h2 className='card-title'>Loading...</h2>
                <p>Loading...</p>
                <div className='justify-end card-actions'>
                    <a target='_blank' className='btn btn-primary'>Loading...</a>
                </div>
            </div>
        </div>
        <div className='card card-morder border-3 w-90 bg-base-100 text-warp'>
            <div className='card-body'>
                <h2 className='card-title'>Loading...</h2>
                <p>Loading...</p>
                <div className='justify-end card-actions'>
                    <a target='_blank' className='btn btn-primary'>Loading...</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSkeleton
