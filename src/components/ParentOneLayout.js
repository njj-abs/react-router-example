import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ParentOneLayout = () =>
	<div>
		<Link to="/parentOne/childOne">childOne</Link>
		<Link to="/parentOne/childTwo">childTwo</Link>
		<Outlet/>
	</div>;

export default ParentOneLayout;
