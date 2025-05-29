import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './estiloEstatico.css'
import logo from '/logo.png'
import Cart from '../Cart'

const Header = () => {
  const [isCartOpen, setCartOpen] = useState(false);


  return (
    <header className='header'>
      <Link to='/' className='link'>
        <img src={logo} alt="" className='imagenLogo' />
      </Link>
      <nav>
        <ul>

          <li> <NavLink to='/' className='link'> Inicio</NavLink> </li>
          <li> <NavLink to='/acercade' className='link'> Sobre Nosotros</NavLink> </li>
          <li> <NavLink to='/productos' className='link'> Galeria de productos</NavLink> </li>
          <li> <NavLink to='/contacto' className='link'> Contacto</NavLink> </li>
          <li className='cartnav'>
            <button className='btnCart' onClick={() => setCartOpen(true)}> <i className="fa-solid fa-cart-shopping" /></button>
            <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
          </li>
          <li className='btnLogin'>
            <NavLink to='/login' className='link'><i className="fa-solid fa-right-to-bracket"></i></NavLink>
          </li>
          <li className='btnAdmin'>
            <NavLink to='/admin' className='link'><i className="fa-solid fa-user-tie"></i></NavLink>
          </li>

        </ul>
      </nav>
    </header>
  )
}

export default Header