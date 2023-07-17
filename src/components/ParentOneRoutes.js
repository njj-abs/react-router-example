import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ParentOne from './ParentOne';
import Child from './Child';
import ParentOneLayout from './ParentOneLayout';

const ParentOneRoutes = () =>
	<Routes>
		<Route element={ <ParentOneLayout/> }>
			<Route index={ true } element={ <ParentOne/> }/>
			<Route path=":id" element={ <Child/> }/>
		</Route>
	</Routes>;

export default ParentOneRoutes;
