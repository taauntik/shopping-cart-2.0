import React from 'react'
import Product from './components/Product';

function Home({ products, setCart, onAddToCart }) {
  return (
    <div className='d-flex flex-wrap justify-content-center container mt-5 mb-5'>
      {products?.map(pd => <Product key={pd.id} pd={pd} setCart={setCart} onAddToCart={onAddToCart} />)}
    </div>
  )
}

export default Home
