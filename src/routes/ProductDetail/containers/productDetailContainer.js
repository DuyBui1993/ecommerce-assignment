import ProductDetailView from '../components/productDetailView'
import { connect } from 'react-redux'
import { openCart, closeCart, addToCart, deleteCartItem } from '../../../components/Checkout/modules/checkout.js'

const mapActionCreators = {
  openCart,
  closeCart,
  addToCart,
  deleteCartItem
}

const mapStateToProps = (state) => {
  var productFromHome, productFromProductList;
  try {
    productFromHome = state.home.productNews.filter(product => product.id == state.location.pathname.substr(state.location.pathname.lastIndexOf('/') + 1))[0]
  } catch(ex) {}

  try {
    productFromProductList = state.productlist.products.filter(product => product.id == state.location.pathname.substr(state.location.pathname.lastIndexOf('/') + 1))[0];
  } catch(ex) {}
  let productFinal = productFromHome ? productFromHome : productFromProductList;
  return {
    product: productFinal
  }
}

export default connect(mapStateToProps, mapActionCreators)(ProductDetailView)
