import ProductDetailView from '../components/productDetailView'
import { connect } from 'react-redux'
import { openCart, closeCart, addToCart, deleteCartItem } from '../../../components/Checkout/modules/checkout.js'
import { fetchProductDetail } from '../modules/productDetail'

const mapActionCreators = {
  openCart,
  closeCart,
  addToCart,
  deleteCartItem,
  fetchProductDetail
}

const mapStateToProps = (state) => {
  return {
    product: state.productDetail.product
  }
}

export default connect(mapStateToProps, mapActionCreators)(ProductDetailView)
