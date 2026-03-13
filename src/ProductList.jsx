import { useSelector, useDispatch } from 'react-redux'
import { addItem } from './CartSlice'
import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'Air Purifying Plants',
    plants: [
      {
        name: 'Spider Plant',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&auto=format&fit=crop',
        description: 'Great air purifier, very easy to grow.',
      },
      {
        name: 'Peace Lily',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&auto=format&fit=crop',
        description: 'Elegant white blooms, removes toxins.',
      },
      {
        name: 'Snake Plant',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=400&auto=format&fit=crop',
        description: 'Nearly indestructible, perfect for beginners.',
      },
      {
        name: 'Boston Fern',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop',
        description: 'Lush green fronds, natural humidifier.',
      },
      {
        name: 'Aloe Vera',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&auto=format&fit=crop',
        description: 'Medicinal plant, loves bright sunlight.',
      },
      {
        name: 'Bamboo Palm',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=400&auto=format&fit=crop',
        description: 'Elegant tropical palm, removes benzene.',
      },
    ],
  },
  {
    name: 'Tropical Plants',
    plants: [
      {
        name: 'Monstera Deliciosa',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&auto=format&fit=crop',
        description: 'Iconic split leaves, a true statement plant.',
      },
      {
        name: 'Pothos',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1587334274328-64186a80aeee?w=400&auto=format&fit=crop',
        description: 'Trailing vine, extremely low-maintenance.',
      },
      {
        name: 'Philodendron',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1616690248011-b67e5797b457?w=400&auto=format&fit=crop',
        description: 'Heart-shaped leaves, fast grower.',
      },
      {
        name: 'Calathea',
        price: 17.99,
        image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400&auto=format&fit=crop',
        description: 'Stunning patterned foliage.',
      },
      {
        name: 'Bird of Paradise',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400&auto=format&fit=crop',
        description: 'Dramatic tropical foliage, bold statement.',
      },
      {
        name: 'ZZ Plant',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?w=400&auto=format&fit=crop',
        description: 'Drought tolerant with beautiful glossy leaves.',
      },
    ],
  },
  {
    name: 'Succulents & Cacti',
    plants: [
      {
        name: 'Echeveria',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&auto=format&fit=crop',
        description: 'Rosette-shaped, comes in many colors.',
      },
      {
        name: 'Jade Plant',
        price: 10.99,
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&auto=format&fit=crop',
        description: 'Symbol of good luck, very hardy.',
      },
      {
        name: 'Haworthia',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&auto=format&fit=crop',
        description: 'Small and compact, great for windowsills.',
      },
      {
        name: 'Prickly Pear Cactus',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1511702771955-42b52e1cd168?w=400&auto=format&fit=crop',
        description: 'Classic cactus, minimal care needed.',
      },
      {
        name: 'Sedum',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1493131525296-9e4a40a77018?w=400&auto=format&fit=crop',
        description: 'Ground cover succulent, very resilient.',
      },
      {
        name: 'Christmas Cactus',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1548460051-cf1b3c0c6eab?w=400&auto=format&fit=crop',
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
                  <img src={plant.image} alt={plant.name} />
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
