import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
<nav x-data="{ open: false }" className="px-5 pt-5 flex  justify-between md:justify-around items-center relative shadow pb-4  bg-gray-800 text-white">
  <img className="w-10" src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Reddit_Logo_Icon.svg/220px-Reddit_Logo_Icon.svg.png" alt="Logo" />
  <div className="hidden md:flex space-x-6">
    <Link className="hover:text-bluegreen hover:underline" to="/">Home</Link>
    <Link className="hover:text-bluegreen hover:underline" to="/services">Services</Link>
    <Link className="hover:text-bluegreen hover:underline" to="/project">Project</Link>
    <Link className="hover:text-bluegreen hover:underline" to="/about-us">About us</Link>
  </div>
  <div className="hidden md:flex space-x-4">
    <Link className="rounded-xl p-3 bg-bluegreen hover:bg-white hover:text-bluegreen" to="/started">Get Started</Link>
    {/* <Link className="rounded-xl p-3 border-2 border-white hover:bg-white hover:text-black" to="/talk">Let's talk</Link> */}
  </div>
  <div x-cloak x-show="open" x-transition className="absolute top-full left-0 w-full bg-gray-800 lg:hidden flex flex-col items-center py-5 space-y-4 ">
    <Link className="hover:text-bluegreen hover:underline" to="/">Home</Link>
    <Link className="hover:text-bluegreen hover:underline" to="/services">Services</Link>
    <Link className="hover:text-bluegreen hover:underline" to="/project">Project</Link>
    <Link className="hover:text-bluegreen hover:underline" to="/about-us">About us</Link>
    <Link className="rounded-xl p-3 bg-bluegreen hover:bg-white hover:text-bluegreen" href="/started">Get Started</Link>
    {/* <Link className="rounded-xl p-3 border-2 border-white hover:bg-white hover:text-black" href="/talk">Let's talk</Link> */}
  </div>
</nav>

    </div>
  )
}

export default Navbar