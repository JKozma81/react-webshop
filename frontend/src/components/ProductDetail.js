import React, { Component } from 'react';

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productData: null,
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const dataStream = await fetch(
      `http://localhost:5000/products/${this.props.productId}`
    );
    const productDataFromServer = await dataStream.json();

    this.setState({
      productData: productDataFromServer,
      loading: false,
    });
  }

  render() {
    const product = this.state.productData;
    return (
      <div className="d-flex flex-column">
        {this.state.productData ? (
          <img src={product.images[0].url} alt="something" />
        ) : (
          'loading'
        )}
      </div>
    );
  }
}
