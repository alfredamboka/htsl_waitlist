import React from 'react'
import './Navbar.css'
import { Logo } from '../../assets'

const Navbar = () => {
  return (
    <div  className='navbar-container'>
      <div className="logo-container">
        <img src={Logo} alt="a logo" />
      </div>
      <div className="navbar">
        <nav>
          <ul>
            <li className='active'>Home</li>
            <li className='products'>Products</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </nav>
        <button>Get Early Access</button>
      </div>
    </div>
  )
}

export default Navbar