import React from 'react'

function Button({Text, Link}) {
  return (
    <a href={Link} target="_blank" className="bg-black text-text-c relative no-underline mt-2 mr-2 pt-1 pr-4 pb-1 pl-4 border-2 rounded-3xl border-accent-c border-solid btn">{Text}</a>
  )
}

export default Button
