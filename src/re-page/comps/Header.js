import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between bg-black text-white px-2 py-2'>
      <h1>DEMO</h1>
      <nav className='space-x-3'>

        <NavLink to='/About'>About</NavLink>
        <NavLink to='/Contact'>Contact</NavLink>
        <NavLink to='/SignIn'>Sign In</NavLink>
      </nav>
    </div>
  )
}

export default Header
