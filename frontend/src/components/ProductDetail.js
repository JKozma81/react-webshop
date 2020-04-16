import React, { Component } from 'react';

export default class ProductDetail extends Component {
  state = {
    productData: null,
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const dataStream = await fetch(
      'http://localhost:5000/products/' + this.props.productId
    );
    const productDataFromServer = await dataStream.json();

    this.setState((state) => ({
      productData: productDataFromServer.product,
      loading: false,
    }));
  }

  render() {
    return <div className="d-flex flex-column"></div>;
  }
}
