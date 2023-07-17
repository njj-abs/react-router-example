import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ParentTwoLayout = () =>
	<div>
		<Link to="/parentTwo/childOne">childOne</Link>
		<Link to="/parentTwo/childTwo">childTwo</Link>
		<Outlet/>
	</div>;

export default ParentTwoLayout;
