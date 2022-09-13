import React from 'react'
import {useCart} from 'react-use-cart'
const Movie = ({basliq,qiymet,pic,addproduct}) => {
    const{addItem}=useCart();
  return (
    <div className="card col-12 col-sm-6 col-md-4 me-4 mb-4 ms-2 p-0" style={{width: '18rem',background:'#DDDED9',cursor:'pointer'}}>
    <img src={pic} height='350px' className="card-img-top m-0" alt="err" />
    <div className="card-body">
      <h5 className="card-title">{basliq}</h5>
      <p className="card-text">{qiymet}$</p>
      <button type='button' onClick={()=>{addItem(addproduct)}} className="btn btn-dark">Add to cart</button>
    </div>
  </div>
  )
}
//  
export default Movie