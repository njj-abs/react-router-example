import { React } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import ParentOneRoutes from './components/ParentOneRoutes';
import ParentTwoRoutes from './components/ParentTwoRouters';

const App = () =>
	<BrowserRouter>
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/parentOne">ParentOne</Link>
			</li>
			<li>
				<Link to="/parentTwo">ParentTwo</Link>
			</li>
		</ul>
		<Routes>
			<Route { ...{ path: '/', element: <Home/> } }/>
			<Route path="/parentOne/*" element={ <ParentOneRoutes/> }/>
			<Route path="/parentTwo/*" element={ <ParentTwoRoutes/> }/>
		</Routes>
	</BrowserRouter>;

export default App;
