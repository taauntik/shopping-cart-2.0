import React from 'react'
import CartItem from './CartItem'
import './components.styles.css';

function CartItems({ cart, setCart, onAddToCart, onRemoveFromCart }) {
    const total = cart.reduce((ack, item) => ack + item.amount * item.price, 0);
  return (
    <div>
        {cart.length
            ? cart.map((item) => <CartItem key={item.id} pd={item} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} />)
            : <h5 className="m-5">Your Cart has no item :(</h5>
        }
        {cart.length > 0 && <div className="container mb-5 d-flex justify-content-around">
          <div className='fs-3'>Total : </div>
          <div className='fs-3 fw-bold'>${total.toFixed(2)}</div>
        </div>}
    </div>
  )
}

export default CartItems