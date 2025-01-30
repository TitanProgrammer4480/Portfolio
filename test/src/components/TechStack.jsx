import React from 'react'

function TechStack() {

  const stuff = [
    {
      name: "Python",
      link: "https://www.python.org",
      desc: "A very powerful widely used Programming language"
    },
    {
      name: "React",
      link: "https://react.dev",
      desc: "A common js-framework for building web applications"
    },
    {
      name: "Firebase",
      link: "https://firebase.google.com",
      desc: "A tool for developers to add a cloud or database to their projects"
    },
    {
      name: "MongoDB",
      link: "https://www.mongodb.com",
      desc: "A no-sql database which has a wide variety of wrapper for the most common languages"
    },
    {
      name: "Flask",
      link: "https://de.wikipedia.org/wiki/Flask",
      desc: "A framework for building api/web applications in python"
    },
  ]

  return (
    <section className='h-screen w-full bg-text-c text-black flex flex-col items-center justify-center snap-start font-display'>
      <div className="w-full h-[5%] bg-black rounded-bl-[100%] rounded-br-[100%]"></div>
      <div className="w-full h-[95%] flex flex-col justify-center items-center">
        <div>
          <h2 className='overline'>Favourite Technologies:</h2>
        </div>
        <div>
          <div className="mt-4 pt-2 pb-2 pl-10 bg-white rounded-[20px]">
            <h3 className='underline'><a href="https://www.python.org" target="_blank">Python</a></h3>
            <p>A very powerful widely used Programming language</p>
          </div>
          <div className="mt-4 pt-2 pb-2 pl-10 bg-white rounded-[20px]">
            <h3 className='underline'><a href="https://react.dev" target="_blank">React</a></h3>
            <p>A common js-framework for building web applications</p>
          </div>
          <div className="mt-4 pt-2 pb-2 pl-10 bg-white rounded-[20px]">
            <h3 className='underline'><a href="https://firebase.google.com" target="_blank">Firebase</a></h3>
            <p>A tool for developers to add a cloud or database to their projects</p>
          </div>
          <div className="mt-4 pt-2 pb-2 pl-10 bg-white rounded-[20px]">
            <h3 className='underline'><a href="https://www.python.org" target="_blank">MongoDB</a></h3>
            <p>A no-sql database which has a wide variety of wrapper for the most common languages</p>
          </div>
          <div className="mt-4 pt-2 pb-2 pl-10 bg-white rounded-[20px]">
            <h3 className='underline'><a href="https://de.wikipedia.org/wiki/Flask" target="_blank">Flask</a></h3>
            <p>A framework for building api/web applications in python</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack