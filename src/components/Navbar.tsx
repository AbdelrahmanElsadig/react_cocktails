import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <header className="flex shadow-lg mb-16 justify-center items-center gap-8 py-4">
            <Link className='text-2xl opacity-80 transition-all duration-300 ease-in-out
            hover:opacity-100' to={'/'}>Home</Link>
            <Link className='text-2xl opacity-80 transition-all duration-300 ease-in-out
            hover:opacity-100' to={'/about'}>About</Link>
        </header>
    )
}

export default Navbar
