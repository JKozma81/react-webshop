import React, { Component } from 'react';

export default class ProductBox extends Component {
  state = {
    productsData: [],
    loading: false,
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const dataStream = await fetch('http://localhost:5000/products');
  //   const productsData = await dataStream.json();

  //   this.setState((state) => ({
  //     productsData: productsDataFromServer.posts,
  //     loading: false,
  //   }));
  // }

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
        {this.props.product.qty > 0 ? 'In stock' : 'Out of stock'}
        <br />
      </div>
    );
  }
}
