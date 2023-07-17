import React from 'react';
import { useLocation } from 'react-router-dom';

const ParentOne = () => {
	const { pathname } = useLocation();

	// eslint-disable-next-line no-console
	console.log(useLocation());
	return <div>{pathname}</div>;
};

export default ParentOne;
