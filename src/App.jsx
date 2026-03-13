import { useState } from 'react'
import ProductList from './ProductList'

function App() {
  const [showProducts, setShowProducts] = useState(false)

  if (showProducts) {
    return <ProductList />
  }

  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <h1>Welcome to Paradise Nursery</h1>
        <p>
          Your one-stop destination for beautiful houseplants. Bring life and
          greenery into your home today!
        </p>
        <button className="get-started-btn" onClick={() => setShowProducts(true)}>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App
