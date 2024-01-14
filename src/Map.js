import React from 'react'

const Map = () => {

  // const persons = ['ram', 'shyam', 'hari', 'rita'];

  const datas = ['1nio', '2jio', '3sio'];


  return (
    <div >

      {/* <h1 className='font-bold text-2xl'>Users</h1>
      <div>
        {persons.map((per, i) => {
          return <h1>{per}</h1>
        })} */}
      {datas.map((datas, i) => {
        return <h1 key={i}>{`${datas.substring(0, 1)} ${datas.substring(1, datas.length).toUpperCase()} `}</h1>

      })}

    </div>






  )
}


export default Map
