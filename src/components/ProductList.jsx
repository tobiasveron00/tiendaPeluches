import React from 'react'
import Productos from './Productos'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

const ProductList = () => {

    const { productos } = useContext(CartContext)


    return (
        <>
            <h1>Nuestros Productos</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                {
                    productos.map(producto => (
                        <Productos key={producto.id} producto={producto} />
                    ))
                }
            </div>
        </>
    )
}

export default ProductList