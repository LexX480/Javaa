import React, { useState } from 'react'
import { Input, Button } from "@material-tailwind/react";
import { useFormik } from 'formik';

const UserForm = () => {

  const [count, setCount] = useState(0);

const formik = useFormik({
  initialValues: {
    email: '',
    username: ''
  },
  onSubmit: (val) => {
    console.log(val);
  }
});

  return (
    <div className='p-5'>
<div className='space-x-3'>
         <h1>{count}</h1>

      <button onClick={() => {
        setCount((prev) => prev + 1);
      }}>Add </button>

<button onClick={() => {
        setCount((after) => after - 1);
      }}>decrease</button>
</div>

        <form onSubmit={formik.handleSubmit}>
        <div className="p-5 w-72 space-y-5">
          <Input
            label="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            type='email'
            name='email'
          />
          <Input
            onChange={formik.handleChange}
            value={formik.values.username}
            label="Username"
            name='username'
          />
         
          <Button type='submit' size='sm'>Submit</Button>

          </div>
          </form>
          </div>
  )
}

export default UserForm
