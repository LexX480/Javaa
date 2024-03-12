import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePg'
import About from './pages/About'
import NotFound from './pages/NotFound'
import RootLayout from './components/RootLayout'
import Contact from './pages/Contact'
import { useSelector } from 'react-redux'
import UserForm from './components/UserForm'
import EditForm from './components/EditForm'




const App = () => {

  const somes = useSelector((state) => state.userInfo);

  return (
    <>

      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='addForm' element={<UserForm />} />
          <Route path='editForm/:id' element={<EditForm />} />


          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />

        </Route>



      </Routes>



    </>
  )
}

export default App