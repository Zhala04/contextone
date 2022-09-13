import React from 'react'
import Nav from '../components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import MovieList from '../pages/MovieList'
import { MovieProvider } from '../context/MovieContext'
import AddMovie from '../form/AddMovie';
import {CartProvider} from 'react-use-cart'
// import Footer from '../components/Footer'
import Add from '../form/Add'

const AppRouter = () => {
  return (
   <BrowserRouter>
    <CartProvider>
   <MovieProvider>
   <Nav/>
   <Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/movies' element={<MovieList/>} ></Route>
    <Route path='/cart' element={<AddMovie/>} ></Route>
    <Route path='/add' element={<Add/>}></Route>
   </Routes> 
   {/* <Footer/> */}
   </MovieProvider>
   </CartProvider>
   </BrowserRouter>
  )
}

export default AppRouter