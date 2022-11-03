import "./css/index.css";
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Provider from "./context/CartContext";
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:categoryName" element={<ItemListContainer />}/>
          <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="*" element={<ItemListContainer />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
