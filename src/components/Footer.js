import React from 'react'

const Footer = () => {
  return (

    <div className='foot'>
      <div className='relative'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#273036" fill-opacity="1" d="M0,256L40,224C80,192,160,128,240,96C320,64,400,64,480,80C560,96,640,128,720,154.7C800,181,880,203,960,181.3C1040,160,1120,96,1200,64C1280,32,1360,32,1400,32L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>

        <div className='absolute text-black  flex flex-col justify-center items-center'>
          <h1>Develop By</h1>
          <h1>Some One Anonymous</h1>

        </div>
      </div>

    </div>

  )
}

export default Footer
