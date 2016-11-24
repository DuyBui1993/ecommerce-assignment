import ProductListView from '../components/ProductListView'
import { connect } from 'react-redux'
import { toggleSidebar } from '../../../components/Header/modules/header'
import { addToCart } from '../../../components/Checkout/modules/checkout'
import { fetchProductList } from '../modules/ProductList'


const mapActionCreators = {
  toggleSidebar,
  addToCart,
  fetchProductList
}

const mapStateToProps = (state) => ({
  sideBarOpen: state.sidebar.sidebarOpen,
  products: state.productlist.products
})

export default connect(mapStateToProps, mapActionCreators)(ProductListView)
