import React from 'react';
import { Footer } from '../../components';

import './footContainer.css';
import './responsive/footresponsive.css';

const FootContainer = () => {
	return (
		<div className="footer__container section__padding">
			<div className="footer__heading">
				<h1 className="gradient__text">
					Thank you for taking the time to read this portfolio <br/>God Bless you
				</h1>
			</div>
			<div className="footer__btn">
				<a href="#home"><p>Back to Top</p></a>
			</div>
			<Footer />
		</div>
	)
}

export default FootContainer;