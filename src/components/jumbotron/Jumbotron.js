import React from 'react';

import './jumbotron.css';

const Jumbotron = () => {
	return (
		<div className="jumbotron__content">
			<h3 className="gradient__text">
				Hi i'm Guido
				, Web Programmer
			</h3>
			<p>
				Not to much currently i'm just front end developer, perhaps good to you with my current projects.

				and sometimes i do fullstack for many reason, but not to frequent.
				<br/>
				<br/>
				Okay, just front-end until now.
			</p>
			<a href="#skills">
				<button type="button">Check My Skills</button>
			</a>
			
		</div>
	)
}

export default Jumbotron;