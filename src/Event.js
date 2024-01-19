import React from 'react'

const Event = () => {
  const alertUser = (msg) => {
    alert(`hey hold on ${msg}`);
  }
  return (
    <div className='p-2'>
      <button onMouseEnter={(e) => alertUser('lio')} className='bg-slate-700 text-white p-2 m-2'>click me</button>
    </div>
  )
}

export default Event
