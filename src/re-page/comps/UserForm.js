import React, { useState } from 'react'
import { Input, Button, Checkbox, Option, Select, Textarea } from "@material-tailwind/react";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { Radio } from "@material-tailwind/react";

const UserForm = () => {

  const [count, setCount] = useState(0);

  const [data, setData] = useState([]);
  // const nav = useNavigate(); (to nav to different page)


  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      subject: '',
      habits: [],
      country: '',
      msg: ''
    },

    onSubmit: (val, { resetForm }) => {
      setData((prev) => [...prev, val]);
      resetForm();
      // nav();
    }
  });

  const programes = [
    { label: 'HTML', value: 'html', color: 'red' },
    { label: 'React', value: 'react', color: 'blue' },
  ];
  const habits = [
    { label: 'Dance', value: 'dance', color: 'red' },
    { label: 'Sing', value: 'sing', color: 'blue' },
    { label: 'Read', value: 'read', color: 'green' },
  ];

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

          <div className="rads">
            <h1>Choose Fav Subjects</h1>
            <div className="flex gap-5">

              {programes.map((p, i) => {
                return <Radio key={i}
                  name="subject"
                  onChange={formik.handleChange}
                  label={p.label} value={p.value} color={p.color} />;
              })}

            </div>
          </div>

          <div className="habs">
            <h1>Your Habits</h1>
            <div className="flex gap-5">

              {habits.map((p, i) => {
                return <Checkbox key={i}
                  name="habits"
                  onChange={formik.handleChange}
                  label={p.label} value={p.value} color={p.color} />;
              })}

            </div>
          </div>
          <div className="flex w-72 flex-col gap-6">
            <Select size="md" label="Select Country" name='country' onChange={(e) => formik.setFieldValue('country', e)} >
              <Option value='nepal'>Nepal</Option>
              <Option value='india'>India</Option>
              <Option value='china'>China</Option>
            </Select>
          </div>



          <div className="w-96">
            <Textarea label="Message" name='msg' value={formik.values.msg} onChange={formik.handleChange} />
          </div>



          <Button type='submit' size='sm'>Submit</Button>

        </div>
      </form>
      <div className="users mt-4 space-y-5">
        {data.map((user, i) => {
          return <div key={i} className='shadow-lg'>
            <h1>{user.email}</h1>
            <p>{user.username}</p>
            <button>Remove</button>
          </div>
        })}
      </div>
    </div>

  )
}

export default UserForm
