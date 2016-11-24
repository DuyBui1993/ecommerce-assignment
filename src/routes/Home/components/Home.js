import React from 'react'
import {IndexLink, Link} from 'react-router'
import './Home.scss'
import classnames from 'classnames'

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchProductNews();
  }

  render() {
    let menuBtnClasses = classnames('menu', {active: this.props.sideBarOpen})
    let otherClasses = classnames({'slide-right': this.props.sideBarOpen})
    return (
      <div className={"site-inner " + otherClasses}>
        <section className="container-fluid">
          <div className="row">
            <ul className="accordion-group" id="accordion">
              {this.props.accordions.map(accordion => <li className={accordion.isExpand
                ? "out"
                : ""} key={accordion.id} style={{
                backgroundImage: 'url("' + accordion.backgroundUrl + '")'
              }} onClick={() => this.props.expandAccordion(accordion.id)}>
                <div className="accordion-overlay"></div>
                <h3>{accordion.title}</h3>
                <section className="hidden-xs">
                  <article>
                    <p>{accordion.body}</p>
                  </article>
                </section>
              </li>)}
            </ul>
          </div>

          <div className="row mg">
            <div className="container">
              <h1 className="text-center head red">New Products</h1>
              <div className="row">
                {this.props.productNews.map(product => <div key={product.id} className="col-md-3 col-sm-6 col-xs-12">
                  <h3 className="text-center">{product.title}</h3>
                  <div className="sm-box" style={{
                    backgroundImage: 'url("' + product.imageUrl + '"'
                  }}>
                    <div className="sm-box-overlay"></div>
                    <div className="sm-box-basket">
                    <Link className="button button-red" to={ '/productdetail/' + product.id }>
                      Detail
                    </Link>
                    </div>
                    <div className="sm-box-content">
                      <i className="fa fa-chevron-right"></i>
                      Order now $ {product.price}</div>
                  </div>
                </div>)}
              </div>
              <h3 className="view-more">
                <Link className="link" to='/productlist' style={{"background": "#ff6d6d", "color": "#fff"}}>View more
                <span className="glyphicon glyphicon-chevron-right" style={{"color": "#fff"}} aria-hidden="true"></span>
                </Link>
              </h3>
            </div>
          </div>
        </section>
      </div>
    )
  }

}

export default Home
