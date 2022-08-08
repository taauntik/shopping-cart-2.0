import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Drawer } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';

// components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css';
import CartItems from './pages/Home/components/CartItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [products, setData] = useState(null);
  const [cart, setCart] = useState([]);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

    const onAddToCart = (clickedItem) => {
      setCart((prevState) => {
          // Is item in cart
          const isItemInCart = prevState.find(item => item.id === clickedItem.id);

          if (isItemInCart) {
            return prevState.map(item => 
              item.id === clickedItem.id
                ? { ...item, amount: item.amount + 1 }
                : item
            );
          }

          // First time the item is added
          return [...prevState, { ...clickedItem, amount : 1 }]
      })
      toast.success('Successfully added item to the cart', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }

  const onRemoveFromCart = (id) => {
    setCart(prevState => {
      return prevState.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ... item, amount : item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, []);
    })
  };

  return (
    <div className="App">
      <Drawer anchor='right' open={isOpen} onClose={() => setOpen(false)}>
        <FontAwesomeIcon icon={faXmark} className="cross" onClick={() => setOpen(false)} />
        <CartItems cart={cart} setCart={setCart} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} />
      </Drawer>
      <Navbar cart={cart} setOpen={setOpen} />
      <Home products={products} setCart={setCart} onAddToCart={onAddToCart} />
      <ToastContainer />
    </div>
  );
}

export default App;
