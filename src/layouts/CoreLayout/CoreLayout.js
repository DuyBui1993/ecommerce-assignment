import React from 'react'
import '../../styles/bootstrap.min.css'
import './CoreLayout.scss'
import '../../styles/core.scss'

import Header from '../../components/Header'
import Checkout from '../../components/Checkout'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const CoreLayout = ({ children }) => (
  <div className='site-outer'>
    <Header />
    <div className='core-layout__viewport'>
      {children}
    </div>
    <Checkout />
    <Nav />
    <Footer />
  </div>

)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
