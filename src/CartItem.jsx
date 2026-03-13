import { useSelector, useDispatch } from 'react-redux'
import { removeItem, updateQuantity } from './CartSlice'
import { Link } from 'react-router-dom'
import { Navbar } from './ProductList'

function CartItem() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)
  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0)
  const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0)

  const handleIncrease = item => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }))
  }

  const handleDecrease = item => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }))
  }

  const handleDelete = name => {
    dispatch(removeItem(name))
  }

  const handleCheckout = () => {
    alert('Coming Soon! Checkout functionality will be available soon.')
  }

  return (
    <>
      <Navbar cartCount={cartCount} />
      <div className="cart-page">
        <h1>🛒 Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty.</p>
            <Link
              to="/products"
              className="continue-btn"
              style={{ marginTop: '1rem', display: 'inline-block' }}
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            {cartItems.map(item => (
              <div key={item.name} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <div className="unit-price">Unit price: ${item.price.toFixed(2)}</div>
                </div>
                <div className="cart-item-controls">
                  <button className="qty-btn" onClick={() => handleDecrease(item)}>−</button>
                  <span className="qty-display">{item.quantity}</span>
                  <button className="qty-btn" onClick={() => handleIncrease(item)}>+</button>
                </div>
                <div className="item-total">${(item.price * item.quantity).toFixed(2)}</div>
                <button className="delete-btn" onClick={() => handleDelete(item.name)}>
                  Delete
                </button>
              </div>
            ))}

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="cart-total">Total: ${total.toFixed(2)}</div>
              <div className="cart-actions">
                <Link to="/products" className="continue-btn">Continue Shopping</Link>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Checkout (Coming Soon)
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default CartItem
