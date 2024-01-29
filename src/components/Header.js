import React from 'react'

const Header = () => {


  return (
    <div className='flex justify-between bg-black text-white px-7 py-3 items-end'>
      <h1 className='text-2xl'>DEMO</h1>
      <nav className='space-x-3'> 
      
      <a href="#">About</a>
        <a href="#">Contact</a></nav>

    </div>
  )
}

export default Header
