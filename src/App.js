import React from 'react'
import { product } from './dummy/product'




const App = () => {



  return (
    <div className=' grid grid-cols-3  gap-4 p-4 '>

      <h1>{product.map((product) => {
        return <div className='shadow-xl p-4' key={product.id}>
          <h1 className='font-bold'>{product.title}</h1>
          <img src={product.thumbnail} className='w-full h-[250px]' alt="" />
          <p>{product.description.substring(0, 50) + '...'}</p>
          <p>Price: {product.price}</p>
          <p>Discount: {product.discountPercentage}</p>
          <p>Rating: {product.rating}</p>

          <p> Brand: {product.brand}</p>

        </div>
      })}</h1>



    </div>
  )
}

export default App
