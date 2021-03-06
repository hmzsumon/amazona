import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
	return (
		<BrowserRouter>
			<div className='grid-container'>
				<header className='row'>
					<div>
						<a className='brand' href='/'>
							amazona
						</a>
					</div>
					<div>
						<a href='index.html'>Cart</a>
						<a href='signin.html'>Sign In</a>
					</div>
				</header>
				<main>
					<Route path='/product/:id' component={ProductScreen} />
					<Route path='/' component={HomeScreen} exact />
				</main>
				<footer className='row center'>
					Copy Right &copy; 2021 zakaria All right reserbd
				</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
