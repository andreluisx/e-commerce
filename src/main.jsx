import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './input.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './screens/Login.jsx';
import NavBar from './components/NavBar.jsx';
import Home from './screens/Home.jsx';
import Fake from './screens/Fake.jsx';
import ProductDetails from './screens/ProductDetails.jsx';
import Checkout from './screens/Checkout.jsx';
import AddressScreen from './screens/AddressScreen.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
      <NavBar/>
        <Routes>
          
          <Route path='/login-falso' element={<Fake />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/address" element={<AddressScreen />} />

        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
