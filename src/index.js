import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product-detail' element={<ProductDetail/>}/>
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);
