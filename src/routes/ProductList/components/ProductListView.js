import React from 'react'
import './ProductListView.scss'
import classnames from 'classnames'
import {IndexLink, Link} from 'react-router'

class ProductListView extends React.Component {
  componentDidMount() {
    this.props.fetchProductList();
  }

  render() {
    let otherClasses = classnames({'slide-right': this.props.sideBarOpen})
    return (
      <div className={"site-inner " + otherClasses}>
        <div className="row mg">
          <div className="container">
            <h1 className="text-center head red">Product List</h1>
            <div className="row">
              {this.props.products.length > 0 ? this.props.products.filter((product) => {
                  if(this.props.filter === 'all') return true
                  return product.category === this.props.filter
              }).map(product =>
                <div key={product.id}
                 className="col-md-3 col-sm-6 col-xs-12">
                  <h3 className="text-center">{product.title}</h3>
                  <div className="sm-box" style={{backgroundImage: 'url("' + product.imageUrl +'"'}}>
                    <div className="sm-box-overlay"></div>
                    <div className="sm-box-basket">
                      <Link className="button button-red" to={ '/productdetail/' + product.id }>
                        Detail
                      </Link>
                      </div>
                    <div className="sm-box-content"><i className="fa fa-chevron-right"></i> Order now $ {product.price}</div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductListView
