import React from 'react'
import { HeroProfil, Jumbotron } from '../../components';

import './headContainer.css';
import './responsive/headresponsive.css';

const HeadContainer = () => {
	return (
		<div className="heading__container">
			<HeroProfil />
			<Jumbotron />
		</div>
	)
}

export default HeadContainer;