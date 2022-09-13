import React,{useContext} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MovieContext } from '../context/MovieContext'
import {useCart} from 'react-use-cart'


const Nav = () => {
    const [movies]=useContext(MovieContext);
    const{totalItems}=useCart();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to='/'>Movies</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" activeclassname='active' to='/'>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeclassname='active' to='/movies'>Movies List:  <span>{movies.length}</span></NavLink>
          </li>
        </ul>
        <form className="d-flex">
          <Link className="btn btn-outline-success" to='/cart'>Cart({totalItems})</Link>
        </form>
        <form className="d-flex">
          <Link className="btn btn-outline-primary ms-2" to='/add'>Add movie</Link>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Nav