import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Checkout.scss'
import classnames from 'classnames'

export const Checkout = (props) => {
	let checkOutClasses = classnames("to-checkout",{active: props.cartOpen})
	return (
		<aside className={checkOutClasses}>
		<div className="shopping-cart">
		<div className="shopping-cart-header">
			<span className="badge badge-red">{ props.cartProducts.length }</span>
			<div className="shopping-cart-total">
				<span className="lighter-text">Total:</span>
				<span className="main-color-text">${' ' + props.cartProducts.reduce((prev,next) => (prev + next.price * next.quantity),0)}</span>
			</div>
		</div>
		{ props.cartProducts.length > 0 ?
			(
				<div>
				<ul className="shopping-cart-items">
				{ props.cartProducts.map(product =>
					<li key={ product.id } className="clearfix">
						<img src={ product.imageUrl } alt="item1" />
						<span className="item-name">{ product.title }</span>
						<span className="item-price">${ product.price }</span>
						<span className="item-quantity">Quantity:{ product.quantity ? product.quantity : 1 }</span>
						<p className="item-remove" onClick={ () => props.deleteCartItem(product.id) }><a href="#">Remove <i className="fa fa-times"></i></a></p>
					</li>
				)}
				</ul>
				<a href="#" className="button">Checkout</a>
				</div>
			) :
			(
				<p className="text-center"><strong>Cart Empty</strong></p>
			)
		}

			</div>
		</aside>
	)
}
export default Checkout
