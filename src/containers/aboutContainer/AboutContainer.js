import React from 'react';
import { About } from '../../components';

import './aboutContainer.css';
import './responsive/aboutresponsive.css';

const AboutContainer = () => {
	return (
		<div className="about__container" id="about">
			<About />
		</div>
	)
}

export default AboutContainer;