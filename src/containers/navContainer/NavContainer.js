import React from 'react';
import { Navbar, LogoFreelancer } from '../../components';

import './navContainer.css';
import './responsive//navresponsive.css';

const NavContainer = () => {
	return (
		<div className="nav__container">
			<div className="nav__container-links">
			<LogoFreelancer />
			</div>
			<Navbar />
		</div>
	)
}

export default NavContainer