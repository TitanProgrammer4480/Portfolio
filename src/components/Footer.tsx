import { Copyright } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4'>
        <aside className='flex flex-row'>
            <Copyright />
            <p>{new Date().getFullYear()} -  All right reserved by Smart Programming</p>
        </aside>
    </footer>
  )
}

export default Footer