import Navbar from './components/Navbar'
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './components/Cart'
import Products from './components/Products'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import Contact from './components/Contact'

export default function App() {
    return (
      <div className='App'>

      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/fcc_landing/cart' element={<Cart />} />
        <Route path='/fcc_landing/products' element={<Products />}  />
        <Route path='/fcc_landing/' element={<Homepage />}  />
        <Route path='/fcc_landing/contact' element={<Contact />}  />
        </Routes>
        </BrowserRouter>
        <Footer />
        </div>
 
     
     

    )
}
