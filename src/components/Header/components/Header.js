import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import classnames from 'classnames'

export const Header = (props) => {
  let menuBtnClasses = classnames('menu', {active: props.sideBarOpen})
  let otherClasses = classnames({'slide-right': props.sideBarOpen})
  return (
    <nav className="navbar navbar-fixed-top">
        <section className="container-fluid">
            <div className="row">
                <div className="container-menu">
                    <nav className={menuBtnClasses} id="hb" onClick={props.toggleSidebar}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </nav>
                    <Link to="/">
                    <div className="logotype">
                        <div className="big hero">R</div>
                    </div>
                    </Link>
                    <div className="checkout" onClick={props.cartOpen ? props.closeCart : props.openCart}>
                        <h3><a><i className="fa fa-shopping-cart red"></i> To Checkout {props.sideBarOpen} <span className="badge badge-red">{props.cartProducts.length}</span></a></h3>
                    </div>
                </div>
            </div>
        </section>
    </nav>
  )
}
Header.propTypes = {
  sideBarOpen: React.PropTypes.bool,
  toggleSidebar: React.PropTypes.func.isRequired
}

export default Header
