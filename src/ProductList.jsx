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
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chlorophytum_comosum_0zz.jpg/320px-Chlorophytum_comosum_0zz.jpg',
        description: 'Great air purifier, very easy to grow.',
      },
      {
        name: 'Peace Lily',
        price: 15.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg/320px-Spathiphyllum_cochlearispathum_RTBG.jpg',
        description: 'Elegant white blooms, removes toxins.',
      },
      {
        name: 'Snake Plant',
        price: 14.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg/320px-Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg',
        description: 'Nearly indestructible, perfect for beginners.',
      },
      {
        name: 'Boston Fern',
        price: 11.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Nephrolepis_exaltata_2.jpg/320px-Nephrolepis_exaltata_2.jpg',
        description: 'Lush green fronds, natural humidifier.',
      },
      {
        name: 'Aloe Vera',
        price: 9.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/320px-Aloe_vera_flower_inset.png',
        description: 'Medicinal plant, loves bright sunlight.',
      },
      {
        name: 'Bamboo Palm',
        price: 19.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Rhapis_excelsa_2.jpg/320px-Rhapis_excelsa_2.jpg',
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
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Monstera_deliciosa_-_Ka_Tiritiri_o_te_Moana_%28Botanical_Gardens%29_-_%281%29.jpg/320px-Monstera_deliciosa_-_Ka_Tiritiri_o_te_Moana_%28Botanical_Gardens%29_-_%281%29.jpg',
        description: 'Iconic split leaves, a true statement plant.',
      },
      {
        name: 'Pothos',
        price: 8.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Epipremnum_pinnatum_variegata.jpg/320px-Epipremnum_pinnatum_variegata.jpg',
        description: 'Trailing vine, extremely low-maintenance.',
      },
      {
        name: 'Philodendron',
        price: 13.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Philodendron_scandens.jpg/320px-Philodendron_scandens.jpg',
        description: 'Heart-shaped leaves, fast grower.',
      },
      {
        name: 'Calathea',
        price: 17.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Calathea_ornata.jpg/320px-Calathea_ornata.jpg',
        description: 'Stunning patterned foliage.',
      },
      {
        name: 'Bird of Paradise',
        price: 34.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Strelizia_reginae_kvetenstvi.jpg/320px-Strelizia_reginae_kvetenstvi.jpg',
        description: 'Dramatic tropical foliage, bold statement.',
      },
      {
        name: 'ZZ Plant',
        price: 16.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/ZZ_plant.jpg/320px-ZZ_plant.jpg',
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
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Succulents_in_CA.jpg/320px-Succulents_in_CA.jpg',
        description: 'Rosette-shaped, comes in many colors.',
      },
      {
        name: 'Jade Plant',
        price: 10.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Crassula_ovata.jpg/320px-Crassula_ovata.jpg',
        description: 'Symbol of good luck, very hardy.',
      },
      {
        name: 'Haworthia',
        price: 7.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Haworthia_fasciata4.jpg/320px-Haworthia_fasciata4.jpg',
        description: 'Small and compact, great for windowsills.',
      },
      {
        name: 'Prickly Pear Cactus',
        price: 8.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Opuntia_ficus-indica_-_prickly_pear_cactus.jpg/320px-Opuntia_ficus-indica_-_prickly_pear_cactus.jpg',
        description: 'Classic cactus, minimal care needed.',
      },
      {
        name: 'Sedum',
        price: 5.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Sedum_spectabile.jpg/320px-Sedum_spectabile.jpg',
        description: 'Ground cover succulent, very resilient.',
      },
      {
        name: 'Christmas Cactus',
        price: 9.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Schlumbergera_truncata_2.jpg/320px-Schlumbergera_truncata_2.jpg',
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
