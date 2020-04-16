import React, { Component } from 'react';

export default class ProductBox extends Component {
  state = {
    productsData: [],
    loading: false,
  };

  render() {
    return (
      <div className="d-flex flex-column">
        <img src={this.props.product.image} alt="product" />
        {this.props.product.name}
        <br />
        {this.props.product.price}
        <br />
        {this.props.product.shortSpec}
        <br />
<<<<<<< HEAD
        {this.props.product.qty > 0 ? 'In stock' : 'Out of stock'}
=======
        {this.props.product.qty> 0 ? 'In stock' : 'Out of stock'}
>>>>>>> 7ce484da47bca8f9fd8ecfef1252866367d04880
        <br />
      </div>
    );
  }
}
