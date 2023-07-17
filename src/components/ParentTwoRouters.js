import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ParentOne from './ParentOne';
import Child from './Child';
import ParentTwoLayout from './ParentTwoLayout';

const ParentTwoRoutes = () =>
	<Routes>
		<Route element={ <ParentTwoLayout/> }>
			<Route index={ true } element={ <ParentOne/> }/>
			<Route path=":id" element={ <Child/> }/>
		</Route>
	</Routes>;

export default ParentTwoRoutes;
