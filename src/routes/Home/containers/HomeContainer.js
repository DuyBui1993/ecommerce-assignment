import { connect } from 'react-redux'
import { toggleSidebar } from '../../../components/Header/modules/header'
import { expandAccordion, fetchProductNews } from '../modules/home'

import Home from '../components/Home'
const mapActionCreators = {
  toggleSidebar,
  expandAccordion,
  fetchProductNews
}

const mapStateToProps = (state) => ({
  sideBarOpen: state.sidebar.sidebarOpen,
  accordions: state.home.accordions,
  productNews: state.home.productNews
})

export default connect(mapStateToProps, mapActionCreators)(Home)
