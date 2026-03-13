import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store } from './store'
import App from './App'
import ProductList from './ProductList'
import CartItem from './CartItem'
import AboutUs from './AboutUs'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
