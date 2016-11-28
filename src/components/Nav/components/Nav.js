import React from 'react'
import {IndexLink, Link} from 'react-router'
import classnames from 'classnames'

export const Nav = (props) => {
  let menuBtnClasses = classnames('menu', {active: props.sideBarOpen})
  let otherClasses = classnames({'slide-right': props.sideBarOpen})
  let searchInput = classnames('input', {'square': props.searchOpen})
  let searchButton = classnames('search', {'close': props.searchOpen})

  return (
    <div className={"navigation " + otherClasses}>
      <button className="navigation-login">
        <i className="fa fa-shopping-cart"></i>
        To Checkout
        <span className="badge badge-white">{props.cartProducts.length}</span>
      </button>
      <div className="navigation-search">
        <div id="search">
          <input type="text" name="input" className={searchInput} placeholder="Search"/>
          <button type="reset" className={searchButton} id="search-button" onClick={props.toggleSearch}></button>
        </div>
      </div>
      <div className="navigation-content">
        <h3>Menu</h3>
        <ul className="navigation-menu">
          <li>
            <i className="yellow fa fa-circle"></i>
            <Link className="link" onClick={(e) => {
                props.setFilter('all')}} to='/productlist'>All
              <span className="glyphicon glyphicon-chevron-right" style={{"color": "#fff"}} aria-hidden="true"></span>
            </Link>
          </li>
          <li>
            <i className="red fa fa-circle"></i>
            <Link className="link" onClick={(e) => {
                props.setFilter('apple')}} to='/productlist'>Apple
              <span className="glyphicon glyphicon-chevron-right" style={{"color": "#fff"}} aria-hidden="true"></span>
            </Link>
          </li>
          <li>
            <i className="orange fa fa-circle"></i>
            <Link className="link" onClick={(e) => {
                props.setFilter('samsung')}} to='/productlist'>Samsung
              <span className="glyphicon glyphicon-chevron-right" style={{"color": "#fff"}} aria-hidden="true"></span>
            </Link>
          </li>
          <li>
            <i className="blue fa fa-circle"></i>
            <Link className="link" onClick={(e) => {
                props.setFilter('microsoft')}} to='/productlist'>Microsoft
              <span className="glyphicon glyphicon-chevron-right" style={{"color": "#fff"}} aria-hidden="true"></span>
            </Link>
          </li>
          <li>
            <i className="beige fa fa-circle"></i>
            <Link className="link" onClick={(e) => {
                props.setFilter('google')}} to='/productlist'>Google
              <span className="glyphicon glyphicon-chevron-right" style={{"color": "#fff"}} aria-hidden="true"></span>
            </Link>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default Nav
