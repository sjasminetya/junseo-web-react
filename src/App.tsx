import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/scss/style.scss';
import "antd/dist/antd.css";
import WomanDetail from './pages/Catalog/DetailCatalog/WomanDetail';
import KidsCatalog from './pages/Catalog/KidsCatalog';
import KidsList from './pages/Catalog/ListCatalog/KidsList';
import MenList from './pages/Catalog/ListCatalog/MenList';
import WomanList from './pages/Catalog/ListCatalog/WomanList';
import MenCatalog from './pages/Catalog/MenCatalog';
import WomanCatalog from './pages/Catalog/WomanCatalog';
import LandingPage from './pages/LandingPage';
import Cart from './pages/Cart';
import Success from './pages/Success';
import Checkout from './pages/Checkout';

function App() {
	return (
		<div className="App">
			<Router>
				<Route path="/" exact component={LandingPage}></Route>
				<Route path="/men" exact component={MenCatalog}></Route>
				<Route path="/men/:catalog" exact component={MenList}></Route>
				<Route path="/woman" exact component={WomanCatalog}></Route>
				<Route path="/kids" exact component={KidsCatalog}></Route>
				<Route path="/kids/:catalog" exact component={KidsList}></Route>
				<Route path="/woman/:catalog" exact component={WomanList}></Route>
				<Route path="/woman/:catalog/:_id" component={WomanDetail}></Route>
				<Route path="/cart" component={Cart}></Route>
				<Route path="/checkout" component={Checkout}></Route>
				<Route path="/success" component={Success}></Route>
			</Router>
		</div>
	);
}

export default App;
