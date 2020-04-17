import React from 'react';
import Container from 'react-bootstrap/Container';

export default function footer() {
	return (
		<Container className="main-footer d-flex flex-row justify-content-center align-items-center">
			<p>
				&copy; 2020.04.18. Created by Krisztian Nyikos and Janos Kozma
			</p>
		</Container>
	);
}
