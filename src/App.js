import React from "react";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import ProductDetails from "./components/ProductDetails";
import Product from "./components/ProductPage";

function App() {
	
	return (
		<React.Fragment>
	<Router>
		<Routes>
			<Route path="/" element={<Product />}></Route>
			<Route path='/details/:id' element= {<ProductDetails/> }></Route>
		</Routes>
	</Router>
	</React.Fragment>
	)
}

export default App;
