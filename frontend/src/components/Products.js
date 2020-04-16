import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProductBox from './ProductBox';

export default class Products extends Component {
  state = {
    productsData: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const dataStream = await fetch('http://localhost:5000/products');
    const productsData = await dataStream.json();

    this.setState((state) => ({
      productsData: productsData.products,
      loading: false,
    }));
  }

  createProductBoxes = (data) => {
    return data.map((product, idx) => {
      return (
        <Link
          key={`link_${idx}`}
          // to={`/products/${postData.id}`}
          className="post-link"
        >
          <ProductBox product={product} />
        </Link>
      );
    });
  };

  render() {
    return (
      <div className="d-flex flex-column">
        {this.createProductBoxes(this.state.productsData)}
      </div>
    );
  }
}
