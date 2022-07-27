import { React } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.scss';
import About from './components/about';
import Home from './components/home';

// eslint-disable-next-line max-lines-per-function
const App = () =>
	<BrowserRouter>
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
		</ul>
		<main>
			<Switch>
				<Route exact={ true } path="/">
					<Home/>
				</Route>
				<Route path="/about">
					<About/>
				</Route>
			</Switch>
		</main>
	</BrowserRouter>;

export default App;
