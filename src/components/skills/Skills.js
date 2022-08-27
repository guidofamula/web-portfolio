import React from 'react';

import './skills.css';

const Skills = ({title, text}) => {
	return (
	<div className="skills__container-skills">
		<div className="skills__container-title">
		<h1>{title}</h1>
		<div/>
		</div>
		<div className="skills__container-text">
		<p>{text}</p>
		
		</div>

	</div>
	
	)
}

export default Skills;