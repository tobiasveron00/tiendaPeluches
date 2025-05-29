import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'
import { CartContext } from '../context/CartContext'


export const GaleriaDeProductos = () => {

  const {cargando} = useContext(CartContext)
  
  return (
    <>
      <Header />
      {
        cargando ? <div>
          <img src={loading} alt="Loading..." />
          <h2>Cargando...  </h2>
        </div> :
          <ProductList  />
      }
      
      <Footer/>
    </>
  )
}


export default GaleriaDeProductos