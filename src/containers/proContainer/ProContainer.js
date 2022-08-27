import React from 'react';
import { Contents } from '../../components';

import './procontainer.css';
import './responsive/proresponsive.css';

const ProContainer = () => {
	return (
		<div className="project__card section__padding" id="projects">
			<div className="project__heading">
				<h1 className="gradient__text">
					My Projects
					<div/>
				</h1>
				<div className="project__card-container">
				<div className="project__card-container_group">
				<Contents />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProContainer;