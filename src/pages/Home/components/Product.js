import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

function Product({ pd, setCart, onAddToCart }) {
  const { image, title, price, id } = pd;
  const [show, setShow] = useState(false);

  const display = show ? '' : 'd-none';

  return (
    <div className="p-3 m-2 pd" style={{ width: '18rem' }} onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>
        <div onClick={() => onAddToCart(pd)} className={`add-to-cart-btn ${display}`}><FontAwesomeIcon icon={faCartPlus} fontSize={30} /></div>
        <div className="d-flex justify-content-center align-items-center img-container">
            <img src={image} className="card-img-top card-img" alt={title} />
        </div>
        <div className="card-body w-100">
            <h5 className="card-title">{title}</h5>
            <p className="card-text"><strong>${price}</strong></p>
        </div>
    </div>
  )
}

export default Product