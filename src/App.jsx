import React, { useEffect, useState } from 'react'
import './App.css'
import { fetchdataFromApi } from './utils/api'
import { useDispatch } from 'react-redux'
import { getApiConfiguration } from './redux/homeSlice'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import SearchResult from './pages/searchResult/SearchResult'
import Explore from './pages/explore/Explore'
import PNFound from './pages/404/PNFound'
import Header from './components/Header'
import Footer from './components/Footer'
const App = () => {
const dispatch=useDispatch()


  useEffect(()=>{
fetchApiConfig()
  },[])

  const fetchApiConfig=async()=>{
    try {
      const res=await fetchdataFromApi('/configuration')
      const url={
backdrop:res.images.secure_base_url + "original",
poster:res.images.secure_base_url + "original",
profile:res.images.secure_base_url + "original"


}
        dispatch(getApiConfiguration(url))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <BrowserRouter>
    <Header/>
  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/mediaType/:id' element={<Details/>}/>
<Route path='/search/:query' element={<SearchResult/>}/>
<Route path='/explore/:mediaType' element={<Explore/>}/>
<Route path='/*' element={<PNFound/>}/>
  </Routes>
  {/* <Footer/> */}
  </BrowserRouter>
  )
}

export default App