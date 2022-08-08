import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

function CartItem({ pd, onAddToCart, onRemoveFromCart }) {
  const { image, title, amount, price, id } = pd;
  return (
    <div className="m-1 item d-flex align-items-center" style={{ width : '380px' }}>
        <div className="left-widgets d-flex">
            <img src={image} width={50} alt="" />
            <div>
                <h5>{title}</h5>
                <p>Price : <strong>${price}</strong></p>
                <div className="d-flex align-items-center">
                    <div className="btn btn-success" onClick={() => onAddToCart(pd)} >
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className='mx-4'>
                        <strong>{amount}</strong>
                    </div>
                    <div className="btn btn-danger" onClick={() => onRemoveFromCart(id)}>
                        <FontAwesomeIcon icon={faMinus} />
                    </div>
                </div>
            </div>
       </div>
        <div className="right-widgets">
            Total : ${(amount * price).toFixed(2)}
        </div>
    </div>
  )
}

export default CartItem