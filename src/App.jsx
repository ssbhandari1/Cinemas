import React, { useEffect, useState } from 'react'
import './App.css'
import { fetchdataFromApi } from './utils/api'
const App = () => {
  const [movieData,setMovieData]=useState([])

  useEffect(()=>{
apiTesting()
  },[])
  const apiTesting=()=>{
    fetchdataFromApi('/movie/popular').then((res)=>{
      console.log(res)
      setMovieData(res?.results)
    })
  }
  return (
    <div>
      {movieData?.map((movie,index)=>{
        return(
          <div key={index}>
          <h2>{movie.original_title}</h2>
          <p>{movie.overview}</p>
        
          </div>
        )
      })}
    </div>
  )
}

export default App