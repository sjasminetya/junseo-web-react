import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/scss/style.scss';
import KidsCatalog from './pages/Catalog/KidsCatalog';
import MenCatalog from './pages/Catalog/MenCatalog';
import WomanCatalog from './pages/Catalog/WomanCatalog';
import LandingPage from './pages/LandingPage';

function App() {
	return (
		<div className="App">
			<Router>
				<Route path="/" exact component={LandingPage}></Route>
				<Route path="/men" component={MenCatalog}></Route>
				<Route path="/woman" component={WomanCatalog}></Route>
				<Route path="/kids" component={KidsCatalog}></Route>
			</Router>
		</div>
	);
}

export default App;
