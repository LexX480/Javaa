import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const [toggle, setToggle] = useState(false);
  const change = () => {
    setToggle(!toggle);
  }

  return (
    <div className='flex justify-between bg-black text-white px-2 py-2 items-start' >
      <h1>CART</h1>

      <div className='hidden msm:flex'>
        {toggle ? <button onClick={change}><i className='fa-solid fa-xmark'></i></button> : <button onClick={change}><i className='fa-solid fa-bars'></i></button>}

      </div>

      <nav className='space-x-3 msm:hidden'>

        <NavLink to='/About'>About</NavLink>
        <NavLink to='/Contact'>Contact</NavLink>
        <NavLink to='/SignIn'>Sign In</NavLink>
      </nav>
    </div>
  )
}

export default Header
