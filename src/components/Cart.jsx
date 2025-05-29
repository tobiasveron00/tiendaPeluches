import React, { useContext } from 'react'
import './styleCart.css'
import { CartContext } from '../context/CartContext'

const Cart = ({ isOpen, onClose }) => {

    const { cart, handleDeleteFromCart} = useContext(CartContext)


    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className='cart-header'>
                <h2>Carrito de Compras</h2>
                <button onClick={onClose} className='close-button' aria-label="Cerrar carrito">X</button>
            </div>
            <div className='cart-content'>
                {cart.length === 0 ? (
                    <p style={{ color: 'red' }}>El carrito está vacío</p>
                ) : (
                    <><ul className='cart-item'>
                        {cart.map((item, index) => (
                            <li key={item.id} style={{ display: 'flex', color: 'black', fontSize: '1.2em' }}>
                                {item.nombre} - ${item.precio} - {item.cantidad}
                                <button onClick={() => handleDeleteFromCart(item)}><i className="fa-solid fa-trash fa-xl"></i></button>
                            </li>
                        ))}
                </ul>
                    <div className='cart-footer'>
                        <p style={{ color: 'blue' }}>Total: ${cart.reduce((total, item) => total + (item.precio * item.cantidad), 0)}</p>
                        <button className='btnCheckout'>Finalizar Compra</button>
                    </div>
                </>)}
            </div>
        </div>
    );
}

export default Cart