import React from 'react';
import Button from 'react-bootstrap/Button';

export default function productInfo(props) {
	return (
		<>
			<p className="d-flex flex-row justify-content-between">
				<span>Termék neve: {props.name}</span>{' '}
				<span>
					<Button variant="primary">Kosárba</Button>
				</span>
			</p>
			<p>Termék ára: {props.price}</p>
			<p>Leírás: {props.shortSpec}</p>
		</>
	);
}
