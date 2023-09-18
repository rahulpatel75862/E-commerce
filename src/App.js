import React from 'react';
import './App.css';
import Home from './modules/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {Routes, Route} from 'react-router-dom';
import Product from './modules/Product/Product';
import ProductCard from './modules/ProductCard/ProductCard';
import CategoryProduct from './modules/CategoryProduct/CategoryProduct';
import Cart from './modules/Cart/Cart';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/products" element={<ProductCard/>} />
        <Route path="/categories/:name" element={<CategoryProduct/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
