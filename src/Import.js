import React from 'react'

const Import = () => {
  return (
    <div className='pt-20 m-5 flex justify-center'>

      <div className='bx h-[250px] w-[700px] shadow-2xl p-5'>
        <div className="head flex  justify-between">
          <span>Jan 3,2024 </span>
          <h1><button class="bg-indigo-500 rounded text-white">Javascript</button></h1>

        </div>
        <br />
        <div className="body">
          <h1 className='text-2xl font-bold'>Hello Lorem ipsum dolor sit amet.</h1> <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti asperiores debitis neque, officiis quas voluptates pariatur molestias minus at excepturi!</p>
        </div> <br />
        <div className="foot flex  justify-between">
          <a href="#" class='hover:underline'>Read more</a>

          <div className="img">
            <a href="#" class='flex  items-center pb-0 m-0 '>
              <img src="https://images.unsplash.com/photo-1704146087769-ba4d31543936?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-[40px] w-[40px] mx-4 rounded-full ' />
              &nbsp;

              <span class="hover:underline dark:text-gray-400 p-0">HELLO</span>
            </a>
          </div>
        </div>

      </div>


    </div >
  )
}

export default Import
