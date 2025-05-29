import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'
import './stylePages.css'
import { CartContext } from '../context/CartContext'

export const Home = () => {
  const {cargando} = useContext(CartContext)

  return (
    <>
      <Header />
      <main>
        <section className="estiloPrincipal">
          <div className="titulo">
              <h1 className="resumenTitulo"> Peluches Yutori</h1>
              <p>La mejor calidad en amigos rellenos</p>
          </div>
          <div className="infoPrincipal">
            <Link to='/productos'>Conoce nuestros productos</Link>
          </div>
        </section>

        {
          cargando ? <div>
            <img src={loading} alt="Loading..." />
            <h2>Cargando...  </h2>
          </div> :
            <ProductList/>
        }

      </main>
      <Footer />
    </>
  )
}

export default Home