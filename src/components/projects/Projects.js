import React from 'react';

import './projects.css';

const Projects = ({imageUrl, title, desc, linkVisit, visit, linkSource, source }) => {
	return (
		<div className="projects__container">
			<div className="projects__image">
				<img src={imageUrl} alt="Projects" />
			</div>
			<div className="projects__content">
				<div>
					<h3>{title}</h3>
					<p>{desc}</p>
				</div>
				<button type="button">
					<a href={linkVisit} target="_blank" rel="noreferrer">{visit}</a>
				</button>
				<button type="button">
					<a href={linkSource} target="_blank" rel="noreferrer">{source}</a>
				</button>
			</div>
		</div>
	)
}

export default Projects;