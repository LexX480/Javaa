import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePg'

import NotFound from './pages/NotFound'
import RootLayout from './components/RootLayout'

import CategoryPage from './pages/CategoryPage'
import Detail from './pages/detail/Detail'
import SearchPage from './pages/SearchPage'
import MoviePage from './pages/MoviePage'




const App = () => {



  return (
    <>

      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='movie/category/:category' element={<CategoryPage />} />
          <Route path='movie/:category/:page' element={<MoviePage />} />
          <Route path='movie/detail/:id' element={<Detail />} />
          <Route path='/movie/search/:query' element={<SearchPage />} />
          <Route path='*' element={<NotFound />} />

        </Route>



      </Routes>



    </>
  )
}

export default App