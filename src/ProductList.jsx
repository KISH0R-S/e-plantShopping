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
        image: 'https://picsum.photos/seed/spider-plant/500/400',
        description: 'Great air purifier, very easy to grow.',
      },
      {
        name: 'Peace Lily',
        price: 15.99,
        image: 'https://picsum.photos/seed/peace-lily/500/400',
        description: 'Elegant white blooms, removes toxins.',
      },
      {
        name: 'Snake Plant',
        price: 14.99,
        image: 'https://picsum.photos/seed/snake-plant/500/400',
        description: 'Nearly indestructible, perfect for beginners.',
      },
      {
        name: 'Boston Fern',
        price: 11.99,
        image: 'https://picsum.photos/seed/boston-fern/500/400',
        description: 'Lush green fronds, natural humidifier.',
      },
      {
        name: 'Aloe Vera',
        price: 9.99,
        image: 'https://picsum.photos/seed/aloe-vera/500/400',
        description: 'Medicinal plant, loves bright sunlight.',
      },
      {
        name: 'Bamboo Palm',
        price: 19.99,
        image: 'https://picsum.photos/seed/bamboo-palm/500/400',
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
        image: 'https://picsum.photos/seed/monstera/500/400',
        description: 'Iconic split leaves, a true statement plant.',
      },
      {
        name: 'Pothos',
        price: 8.99,
        image: 'https://picsum.photos/seed/pothos-vine/500/400',
        description: 'Trailing vine, extremely low-maintenance.',
      },
      {
        name: 'Philodendron',
        price: 13.99,
        image: 'https://picsum.photos/seed/philodendron/500/400',
        description: 'Heart-shaped leaves, fast grower.',
      },
      {
        name: 'Calathea',
        price: 17.99,
        image: 'https://picsum.photos/seed/calathea/500/400',
        description: 'Stunning patterned foliage.',
      },
      {
        name: 'Bird of Paradise',
        price: 34.99,
        image: 'https://picsum.photos/seed/bird-paradise/500/400',
        description: 'Dramatic tropical foliage, bold statement.',
      },
      {
        name: 'ZZ Plant',
        price: 16.99,
        image: 'https://picsum.photos/seed/zz-plant/500/400',
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
        image: 'https://picsum.photos/seed/echeveria/500/400',
        description: 'Rosette-shaped, comes in many colors.',
      },
      {
        name: 'Jade Plant',
        price: 10.99,
        image: 'https://picsum.photos/seed/jade-plant/500/400',
        description: 'Symbol of good luck, very hardy.',
      },
      {
        name: 'Haworthia',
        price: 7.99,
        image: 'https://picsum.photos/seed/haworthia/500/400',
        description: 'Small and compact, great for windowsills.',
      },
      {
        name: 'Prickly Pear Cactus',
        price: 8.99,
        image: 'https://picsum.photos/seed/prickly-pear/500/400',
        description: 'Classic cactus, minimal care needed.',
      },
      {
        name: 'Sedum',
        price: 5.99,
        image: 'https://picsum.photos/seed/sedum-plant/500/400',
        description: 'Ground cover succulent, very resilient.',
      },
      {
        name: 'Christmas Cactus',
        price: 9.99,
        image: 'https://picsum.photos/seed/christmas-cactus/500/400',
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
