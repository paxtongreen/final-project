import React from 'react'
import { Link } from 'react-router-dom'

const Navbar =()=> {
    return(
    <nav className="nav navbar top-navbar justify-content">
        <li className="nav-item top-nav-item">
            <Link to="/"className="nav-link top-nav-link home-link">home</Link>
        </li>
        <li className="nav-item top-nav-item">
            <Link to="/Shop" className="nav-link top-nav-link">shop</Link>
        </li>
        <li className="nav-item top-nav-item">
            <Link to='/About' className="nav-link top-nav-link">about</Link>
        </li>
        <li className="nav-item top-nav-item">
            <Link to="/Checkout" className="nav-link top-nav-link">checkout</Link>
        </li>
    </nav>
    )
}

export default Navbar