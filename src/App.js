import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePg'

import NotFound from './pages/NotFound'
import RootLayout from './components/RootLayout'

import { useSelector } from 'react-redux'

import Search from './components/Search'
import CategoryPage from './pages/CategoryPage'




const App = () => {

  const somes = useSelector((state) => state.userInfo);

  return (
    <>

      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='movie/category/:category' element={<CategoryPage />} />
          <Route path='/movie/search/:query' element={<Search />} />
          <Route path='*' element={<NotFound />} />

        </Route>



      </Routes>



    </>
  )
}

export default App