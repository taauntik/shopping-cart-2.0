import React from 'react'
import './styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


function Navbar({ cart, setOpen }) {
  return (
    <nav style={{ background: 'white' }} className="navbar shadow-sm sticky-top">
      <div className="d-flex align-items-center justify-content-between w-100 container">
        <a className="navbar-brand shop-name" href="#">ESHO<span>P</span></a>
        <div className="shopping-cart" onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faCartShopping} fontSize={25} />
            <div className="cart-count">
              <span style={{ userSelect : 'none' }}>{cart.length}</span>
            </div>
        </div>
     </div>
    </nav>
  )
}

export default Navbar