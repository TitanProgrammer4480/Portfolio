"use client"
import React from 'react'

const LoginPage = () => {

  const login = async (e: React.FormEvent) => {

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
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