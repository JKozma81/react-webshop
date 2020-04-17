import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProductInfo from './ProductInfo';
import ProductSpec from './ProductSpec';
import ImageCarousel from './ImageCarousel';

export default class ProductDetail extends Component {
	state = {
		productData: null,
		loading: false,
		idError: '',
	};

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
		const product =
			this.state.productData && this.state.productData.products;
		const images = this.state.productData && this.state.productData.images;
		return (
			<Container className="prod-details-container">
				{this.state.productData ? (
					<>
						<Row>
							<Col md={6} className="height-300 border">
								<ImageCarousel images={images} />
							</Col>
							<Col md={6} className="p-3 height-300 border">
								<ProductInfo
									name={product.name}
									price={product.price}
									shortSpec={product.shortSpec}
								/>
							</Col>
						</Row>
						<Row>
							<Col className="height-300 border p-3">
								<ProductSpec
									params={product.params}
									url={product.url}
								/>
							</Col>
						</Row>
						<Row>
							<Col className="height-300 border">
								Ajánlott termékek
							</Col>
						</Row>
					</>
				) : (
					'loading'
				)}
			</Container>
		);
	}
}
