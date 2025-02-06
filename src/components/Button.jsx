import React from 'react'

function Button({Text, Link}) {
  return (
    <a href={Link} target="_blank" className="bg-accent-c text-text-c inline-block no-underline mt-2 mr-2 pt-1 pr-5 pb-1 pl-5 border-2 rounded-3xl border-accent-c border-solid">{Text}</a>
  )
}

export default Button