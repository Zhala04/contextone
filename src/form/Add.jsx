import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { MovieContext } from '../context/MovieContext';
import uuid from 'react-uuid';

const Add = () => {
    const[mname,setName]=useState('');
    const[mprice,setPrice]=useState('');
    const[mimage,setImage]=useState('');
    const[mid,setId]=useState('');
    const[movies,setMovies]=useContext(MovieContext)
    const updateName=(f)=>{
        setName(f.target.value);
    }
    const updatePrice=(f)=>{
        setPrice(f.target.value);
    }
    const updateImage=(f)=>{
        setImage(f.target.value);
    }
    // const updateId=(f)=>{
    //     setId(f.target.value);
    // }

    const addmovie=(e)=>{
        e.preventDefault();
        setMovies(prevMovies=>[...prevMovies,{name:mname,price:mprice,picture:mimage,id:uuid()}]);
        
    }
  return (
   <div className="container">
     <form onSubmit={addmovie} className='mt-5 ms-3' style={{width:'50%'}}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Movie name</label>
      <input type="text" className="form-control" onChange={updateName}  />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
      <input type="text" className="form-control" onChange={updatePrice}  />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Image:</label>
      <input type="text" className="form-control" onChange={updateImage}  />
    </div>
    {/* <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Id:</label>
      <input type="text" className="form-control" onChange={updateId}  />
    </div> */}
    
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
   </div>
  )
}

export default Add