import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Footer.scss'

export const Footer = () => (
	<div className="footer">
			<footer className="footer-inner">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<h3 className="h3">About us</h3>
							<ul className="footer-list">
								<li><a href="#">Our story</a></li>
								<li><a href="#">Venue</a></li>
								<li><a href="#">Other</a></li>
							</ul>
						</div>
						<div className="col-md-3">
							<h3 className="h3">Partners</h3>
							<ul className="footer-list">
								<li><a href="#">DC</a></li>
								<li><a href="#">Burton</a></li>
								<li><a href="#">K2</a></li>
							</ul>
						</div>
						<div className="col-md-3">
							<h3 className="h3">Customer support</h3>
							<ul className="footer-list">
								<li><a href="#">Chat with us</a></li>
								<li><a href="#">+84 167 458 0601</a></li>
								<li><a href="duybui03041993@gmail.com">E-mail us</a></li>
							</ul>
						</div>
						<div className="col-md-3">
							<h3 className="h3">Socials</h3>
							<ul className="footer-list footer-list-inline">
								<li><a href="https://www.facebook.com/duy.thien.549?fref=ts"><i className="fa fa-facebook"></i></a></li>
								<li><a href="#"><i className="fa fa-instagram"></i></a></li>
								<li><a href="#"><i className="fa fa-twitter"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</div>
)

export default Footer
