import { connect } from 'react-redux'
import { openCart, closeCart, addToCart, deleteCartItem } from '../modules/checkout'
import Checkout from '../components/Checkout'

const mapActionCreators = {
  openCart,
  closeCart,
  addToCart,
  deleteCartItem
}

const mapStateToProps = (state) => ({
  cartOpen: state.cart.cartOpen,
  cartProducts: state.cart.cartProducts
})

export default connect(mapStateToProps, mapActionCreators)(Checkout)
