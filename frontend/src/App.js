import React from 'react';
import Product from './components/Product';
import data from './data';

function App() {
	return (
		<div className='grid-container'>
			<header className='row'>
				<div>
					<a className='brand' href='index.htl'>
						amazona
					</a>
				</div>
				<div>
					<a href='index.html'>Cart</a>
					<a href='signin.html'>Sign In</a>
				</div>
			</header>
			<main>
				<div className='row center'>
					{data.products.map((product) => (
						<Product key={product._id} product={product} />
					))}
				</div>
			</main>
			<footer className='row center'>
				Copy Right &copy; 2021 zakaria All right reserbd
			</footer>
		</div>
	);
}

export default App;
