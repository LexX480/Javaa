import React from 'react'

const DisplaySection = () => {
  return (
    <div className='grid grid-cols-2 items-center md:grid-cols-1'>
      <div className='h-[600px] '>
        <dotlottie-player src="https://lottie.host/fdcd7df3-0c72-43f0-8346-12bebd56c714/JwyRbDNvNA.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
      </div>

      <div className='info space-y-2'>
        <h1 className='font-extrabold text-3xl'>Hi, I am JOHN</h1>

        <p className='text-red-500'>Some Dev, Freelancer, Rounder</p>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi minus, in ipsa aliquid doloremque suscipit eveniet quod iure mollitia officia rem delectus iste, velit quia quis explicabo animi nihil obcaecati non. Temporibus porro voluptates blanditiis nostrum ex eligendi exercitationem a asperiores ducimus vitae ad amet, ea itaque! Ipsam neque eum delectus iusto reiciendis cum porro facere aut quidem suscipit magni deserunt impedit sit quibusdam sapiente aspernatur beatae molestiae atque, laboriosam minima et? Quos facere numquam quaerat veritatis tempora magni nulla unde quod molestiae. Nisi laudantium repudiandae facere adipisci eaque sunt, autem consequatur reprehenderit suscipit sit atque? Numquam animi quaerat provident.</p>

      </div>

    </div>
  )
}

export default DisplaySection
