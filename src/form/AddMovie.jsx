import React from 'react'
import {useCart} from 'react-use-cart'
const AddMovie = () => {
  const{isEmpty,items,updateItemQuantity,removeItem,cartTotal}=useCart();
  if(isEmpty) return <div className="container"><img style={{marginLeft:'240px'}} src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif" alt="" /></div>
  return (
    <div className='container mt-5'>
      <h2 style={{color:'#BB2D3B'}} className='text-center mb-3'><b>Movies in the Cart</b></h2>
    <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Image</th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Count</th>
        <th scope="col">Del</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item,index)=>{
        return(
      <tr>
        <th scope="row">{index+1}</th>
        <td><img height='200px' width='180px' src={item.picture} alt="" /></td>
        <td><h4>{item.name}</h4></td>
        <td><h4>{item.price}$</h4></td>
        <td>
          <button onClick={()=>updateItemQuantity(item.id,item.quantity-1)} className='btn btn-danger me-2'>-</button>
          {item.quantity}
          <button onClick={()=>updateItemQuantity(item.id,item.quantity+1)} className='btn btn-success ms-2'>+</button>
          </td>
          <td><button onClick={()=>{removeItem(item.id)}} className='btn btn-danger'>X</button></td>
      </tr>

        )
      })}
   
    </tbody>
  </table>
  <div>
    <h4>Total price: {cartTotal}$</h4>

  </div>
  </div>
  )
}

export default AddMovie