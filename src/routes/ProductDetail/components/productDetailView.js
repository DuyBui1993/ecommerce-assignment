import React from 'react'
import './productDetailView.scss'

export const ProductDetailView = (props) => {
  return (
      <div id="product-detail" className="card">
        <div className="product-image"><img src={props.product.imageUrl} alt="" /></div>
        <div className="product-info">
          <h1 className="product-name">{props.product.title}</h1>
          <h2 className="product-price">{props.product.price}</h2>
          <h3 className="product-slogan">Comfort and speed, customized</h3>
          <ul className="preferences">
            <li>
              <span className="list-name">Colors</span>
              <ul className="colors">
                <li className="red"></li>
                <li className="blue active"></li>
                <li className="yellow"></li>
              </ul>
            </li>
            <li>
              <span className="list-name">Size</span>
              <select className="size" >
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </li>
            <li>
              <span className="list-name">Qty</span>
              <select className="qty">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </li>
          </ul>
          <a onClick={() => props.addToCart(props.product,1)} href="#" className="product-detail-button">Add to cart</a>
        </div>
      </div>
  )
}
export default ProductDetailView
