import { connect } from 'react-redux'
import { toggleSidebar, toggleSearch } from '../modules/header'
import { openCart, closeCart, addToCart } from '../../Checkout/modules/checkout'
import Header from '../components/Header'

const mapActionCreators = {
  toggleSidebar,
  openCart,
  closeCart,
  addToCart
}

const mapStateToProps = (state) => ({
  sideBarOpen: state.sidebar.sidebarOpen,
  searchOpen: state.sidebar.searchOpen,
  cartOpen: state.cart.cartOpen,
  cartProducts: state.cart.cartProducts
})

export default connect(mapStateToProps, mapActionCreators)(Header)
