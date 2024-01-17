import React from 'react'
import { product } from './dummy/product'
import Function from './Function'





const App = () => {



  return (

    <div className=' p-2 bg-slate-500 flex justify-center'>



      <table className='border-black border-2'>
        <thead className='bg-slate-600'>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>IMAGE</th>
            <th>BRAND</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
          </tr>
        </thead>

        <tbody>
          {product.map((product) => {
            return <tr key={product.id} className='px-6 py-3 border-b bg-neutral-100 '>

              <td className='px-6 border-r'>{product.id}</td>
              <td className=' px-6 border-r '>{product.title}</td>
              <td className='px-6 border-r '><img src={product.thumbnail} alt="" /></td>
              <td className='px-6 border-r'>{product.brand}</td>
              <td className='px-6 border-r'>{product.category}</td>
              <td className='px-6 border-r'>${product.price}</td>

            </tr>

          })}

        </tbody>

      </table>

      {/* <h1 className='font-bold'>{product.title}</h1>
            <img src={product.thumbnail} className='w-full h-[250px]' alt="" />
            <p>{product.description.substring(0, 50) + '...'}</p>
            <p>Price: {product.price}</p>
            <p>Discount: {product.discountPercentage}</p>
            <p>Rating: {product.rating}</p>

            <p> Brand: {product.brand}</p> */}


      <Function />

    </div>







  )
}

export default App
