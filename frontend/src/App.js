import React from 'react';
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
						<div key={product._id} className='card'>
							<a href={`/product/${product._id}`}>
								<img
									className='medium'
									src={product.image}
									alt={product.name}
								/>
							</a>
							<div className='card-body'>
								<a href={`/product/${product.name}`}>
									<h2>{product.name}</h2>
								</a>
								<div className='rating'>
									<span>
										<i className='fa fa-star'></i>
									</span>
									<span>
										<i className='fa fa-star'></i>
									</span>
									<span>
										<i className='fa fa-star'></i>
									</span>
									<span>
										<i className='fa fa-star-half-o'></i>
									</span>
									<span>
										<i className='fa fa-star-o'></i>
									</span>
								</div>
								<div className='price'>${product.price}</div>
							</div>
						</div>
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
