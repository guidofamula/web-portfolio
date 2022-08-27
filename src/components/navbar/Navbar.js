import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import MenuNavLinks from './MenuNavLinks';
import SocialMedia from './SocialMedia';

import './navbar.css';

const Navbar = () => {
	const [ toggleNavMenu, setToggleNavMenu ] = useState(false);

	return (
		<>
			<div className="navmenu__links-container">
				<MenuNavLinks />
			</div>
			<div className="navmenu__links__social-media">
				<SocialMedia />
			</div>
			<div className="navmenu__navbar-menu">
				{ toggleNavMenu 
					? <RiCloseLine color="#fff" size={27} onClick={() => setToggleNavMenu(false)} />
					: <RiMenu3Line color="fff" size={27} onClick={() => setToggleNavMenu(true)} />
				}
				{ toggleNavMenu && (
					<div className="navmenu__navbar-menu_container scale-up-center">
					<div className="navmenu__navbar-menu_container-links">
					<MenuNavLinks />
					<div className="navmenu__navbar-menu_container-links-social">
						<SocialMedia />
					</div>
					</div>
					</div>
				)}
			</div>
		</>
	)
}

export default Navbar;