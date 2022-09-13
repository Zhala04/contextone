import React,{useContext} from 'react'
import { MovieContext } from '../context/MovieContext'
import Movie from './Movie'

const MovieList = () => {
    const [movies,setMovies]=useContext(MovieContext)
  return (
 <div className="container mt-3">
  
       <div className='row'>
        
        {movies.map(fd=>{
            return <Movie basliq={fd.name} qiymet={fd.price}  addproduct={fd} pic={fd.picture}  />
        })}
        
    </div>
 </div>
  )
}
// 
export default MovieList