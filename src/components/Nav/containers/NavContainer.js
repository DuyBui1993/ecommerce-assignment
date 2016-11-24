import { connect } from 'react-redux'
import { toggleSidebar, toggleSearch } from '../../Header/modules/header'
// import CoreLayout from '../../layouts/CoreLayout'
import Nav from '../components/Nav'
const mapActionCreators = {
  toggleSidebar,
  toggleSearch
}

const mapStateToProps = (state) => ({
  sideBarOpen: state.sidebar.sidebarOpen,
  searchOpen: state.sidebar.searchOpen,
  cartProducts: state.cart.cartProducts
})

export default connect(mapStateToProps, mapActionCreators)(Nav)
