import React from 'react'
import { Route, Routes } from 'react-router'
import HomePg from './re-page/HomePg'
import About from './re-page/About'
import Contact from './re-page/Contact'
import SignIn from './re-page/comps/SignIn'

import NotFound from './re-page/NotFound'
import Header from './re-page/comps/Header'
import RootLayout from './re-page/comps/RootLayout'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<RootLayout/>} />
                <Route path='/' element={<HomePg />} />
        <Route path='About' element={<About />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='SignIn' element={<SignIn />} />

        <Route path='*' element={<NotFound />} />



      </Routes>

    </div>
  )
}

export default App
