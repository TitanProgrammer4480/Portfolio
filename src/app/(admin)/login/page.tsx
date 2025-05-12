"use client"
import React from 'react'

const LoginPage = () => {

  const login = () => {

  }

  return (
    <div>
      <form onSubmit={login}>
        <input name="name" />
        <input name="password" />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default LoginPage