import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './components/Header';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';

function App() {
	return (
		<Container fluid>
			<Router>
				<Row>
					<Header />
				</Row>
				<Row className="main-content">
					<Switch>
						<Route exact path="/">
							<Col xs={9}>
								<h2>Home</h2>
							</Col>
							<Col xs={3}>
								<h2>Kosár</h2>
							</Col>
						</Route>
						<Route
							path="/products/:id"
							component={(routProps) => (
								<ProductDetail
									productId={routProps.match.params.id}
								/>
							)}
						></Route>
						<Route path="/products">
							<Products className="main-content" />
						</Route>
						<Route path="/orders">Orders</Route>
					</Switch>
				</Row>
				<Row>
					<Footer />
				</Row>
			</Router>
		</Container>
	);
}

export default App;
