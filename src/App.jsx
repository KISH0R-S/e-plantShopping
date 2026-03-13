import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <h1>🌿 Paradise Nursery</h1>
        <p>
          Welcome to Paradise Nursery — your one-stop destination for beautiful
          houseplants. Bring life and greenery into your home today!
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  )
}

export default App
