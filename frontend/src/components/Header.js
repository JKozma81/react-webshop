import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
	render() {
		return (
			<Navbar bg="light" expand="lg" className="w-100 main-header">
				<Navbar.Brand href="/">
					<h1>Our React Webshop</h1>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse
					id="basic-navbar-nav"
					className="justify-content-end"
				>
					<NavLink
						className="nav-link"
						exact
						activeClassName="selected"
						to="/"
					>
						Főoldal
					</NavLink>
					<NavLink
						className="nav-link"
						activeClassName="selected"
						to="/products"
					>
						Termékek
					</NavLink>
					<NavLink
						className="nav-link"
						activeClassName="selected"
						to="/orders"
					>
						Rendelések
					</NavLink>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
