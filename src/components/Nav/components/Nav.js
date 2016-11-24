import React from 'react'
import { IndexLink, Link } from 'react-router'
import classnames from 'classnames'

export const Nav = (props) => {
  let menuBtnClasses = classnames('menu', {active: props.sideBarOpen})
  let otherClasses = classnames({'slide-right': props.sideBarOpen})
  let searchInput = classnames('input',{'square': props.searchOpen})
  let searchButton = classnames('search',{'close': props.searchOpen})

    return (
      <div className={"navigation " + otherClasses}>
        <button className="navigation-login">
          <i className="fa fa-shopping-cart"></i> To Checkout <span className="badge badge-white">{props.cartProducts.length}</span>
        </button>
          <div className="navigation-search">
            <div id="search">
              <input type="text" name="input" className={searchInput} placeholder="Search" />
              <button type="reset" className={searchButton} id="search-button" onClick={props.toggleSearch}></button>
            </div>
          </div>
          <div className="navigation-content">
            <h3>Menu</h3>
            <ul className="navigation-menu">
              <li><a href="#"><i className="red fa fa-circle"></i> Apple</a></li>
              <li><a href="#"><i className="beige fa fa-circle"></i> Samsung</a></li>
              <li><a href="#"><i className="orange fa fa-circle"></i> Microsoft</a></li>
              <li><a href="#"><i className="blue fa fa-circle"></i> Google</a></li>
            </ul>
          </div>
        </div>

    )
}

export default Nav
