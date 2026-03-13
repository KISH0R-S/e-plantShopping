import { useSelector, useDispatch } from 'react-redux'
import { addItem } from './CartSlice'
import { Link } from 'react-router-dom'

const categories = [
  {
    name: '🌬️ Air Purifying Plants',
    plants: [
      {
        name: 'Spider Plant',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1566400460022-f338c3e1b3a5?w=500&h=400&fit=crop&auto=format',
        description: 'Great air purifier, very easy to grow.',
      },
      {
        name: 'Peace Lily',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=500&h=400&fit=crop&auto=format',
        description: 'Elegant white blooms, removes toxins.',
      },
      {
        name: 'Snake Plant',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1620127252536-03bdfcb87c9a?w=500&h=400&fit=crop&auto=format',
        description: 'Nearly indestructible, perfect for beginners.',
      },
      {
        name: 'Boston Fern',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1508022713622-df2d8fb7b4cd?w=500&h=400&fit=crop&auto=format',
        description: 'Lush green fronds, natural humidifier.',
      },
      {
        name: 'Aloe Vera',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500&h=400&fit=crop&auto=format',
        description: 'Medicinal plant, loves bright sunlight.',
      },
      {
        name: 'Bamboo Palm',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1521334884684-d539b573e2b2?w=500&h=400&fit=crop&auto=format',
        description: 'Elegant tropical palm, removes benzene.',
      },
    ],
  },
  {
    name: '🌴 Tropical Plants',
    plants: [
      {
        name: 'Monstera Deliciosa',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500&h=400&fit=crop&auto=format',
        description: 'Iconic split leaves, a true statement plant.',
      },
      {
        name: 'Pothos',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1587334274328-64186a80aeee?w=500&h=400&fit=crop&auto=format',
        description: 'Trailing vine, extremely low-maintenance.',
      },
      {
        name: 'Philodendron',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1616690248011-b67e5797b457?w=500&h=400&fit=crop&auto=format',
        description: 'Heart-shaped leaves, fast grower.',
      },
      {
        name: 'Calathea',
        price: 17.99,
        image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=500&h=400&fit=crop&auto=format',
        description: 'Stunning patterned foliage.',
      },
      {
        name: 'Bird of Paradise',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=500&h=400&fit=crop&auto=format',
        description: 'Dramatic tropical foliage, bold statement.',
      },
      {
        name: 'ZZ Plant',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?w=500&h=400&fit=crop&auto=format',
        description: 'Drought tolerant with beautiful glossy leaves.',
      },
    ],
  },
  {
    name: '🌵 Succulents & Cacti',
    plants: [
      {
        name: 'Echeveria',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&h=400&fit=crop&auto=format',
        description: 'Rosette-shaped, comes in many colors.',
      },
      {
        name: 'Jade Plant',
        price: 10.99,
        image: 'https://images.unsplash.com/photo-1496861083958-175bb1bd5702?w=500&h=400&fit=crop&auto=format',
        description: 'Symbol of good luck, very hardy.',
      },
      {
        name: 'Haworthia',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=400&fit=crop&auto=format',
        description: 'Small and compact, great for windowsills.',
      },
      {
        name: 'Prickly Pear Cactus',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1502002584040-aa49801f4a90?w=500&h=400&fit=crop&auto=format',
        description: 'Classic cactus, minimal care needed.',
      },
      {
        name: 'Sedum',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=500&h=400&fit=crop&auto=format',
        description: 'Ground cover succulent, very resilient.',
      },
      {
        name: 'Christmas Cactus',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1548460051-cf1b3c0c6eab?w=500&h=400&fit=crop&auto=format',
        description: 'Blooms in winter, makes a great gift.',
      },
    ],
  },
]

export function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">🌿 Paradise Nursery</Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/about">About Us</Link>
        <Link to="/cart" className="cart-icon">
          🛒
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  )
}

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)
  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0)
  const addedNames = cartItems.map(i => i.name)

  return (
    <>
      <Navbar cartCount={cartCount} />
      <div className="product-list-page">
        {categories.map(cat => (
          <div key={cat.name} className="category-section">
            <h2>{cat.name}</h2>
            <div className="products-grid">
              {cat.plants.map(plant => (
                <div key={plant.name} className="product-card">
                  <div className="img-wrapper">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      onError={e => { e.target.src = `https://placehold.co/400x300/e8f5e9/2e7d32?text=${encodeURIComponent(plant.name)}` }}
                    />
                  </div>
                  <div className="product-info">
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <div className="product-price">${plant.price.toFixed(2)}</div>
                    <button
                      className="add-to-cart-btn"
                      disabled={addedNames.includes(plant.name)}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {addedNames.includes(plant.name) ? 'Added ✓' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductList
