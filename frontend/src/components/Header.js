import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="d-flex flex-row align-center justify-between padding-15">
        <div className="d-flex flex-column justify-center align-center">
          <h1> Our React Webshop</h1>
        </div>
        <nav className="">
          <ul className="navlinks d-flex flex-row justify-end align-center">
            <li>
              <NavLink
                className="navlink d-flex justify-center align-center"
                exact
                activeClassName="selected"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navlink d-flex justify-center align-center"
                activeClassName="selected"
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navlink d-flex justify-center align-center"
                activeClassName="selected"
                to="/orders"
              >
                Orders
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
