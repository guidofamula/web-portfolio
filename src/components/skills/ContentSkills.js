import React from 'react';
import Skills from './Skills';

import './contentskills.css';

const DataSkills = [
	{
		title: "Using Reactjs - Javascript",
		text: "In this reactjs UI framework, I use components to build code that is easy to maintain, read without being tied to a lot of dependencies that might not be very important in the development process.",
	},
	{
		title: "CSS libraries and other frameworks",
		text: "Able to implement UI / UX appearance on the web, such as using CSS3, React MUI, Bootstrap and others",
	},
	{
		title: "Able to Apply MERN",
		text: "In addition to working as a front-end on the web UI, some other work I can do is implementing MERN which is an acronym for Mongo as DB, Express as server, React as UI, and Nodejs as mutual javascript implementation in the development environment.",
	},
	{
		title: "Able to English and fluent in Indonesian",
		text: "In terms of communication, I am able to use English and Indonesian as my mother tongue.",
	},
]


const ContentSkills = () => {
	return (
	<div className="skills__features section__padding" id="skills">
		<div className="skills__features-heading">
			<h1 className="gradient__text">
				Some of my skills with technology or stacks that I usually use in programming
			</h1>
			<p>Technology and Stack</p>
		</div>
		<div className="skills__features-container">
			{DataSkills.map((item, index) => (
				<Skills title={item.title} text={item.text} key={item.title + index} />
				))}
		</div>
	</div>	
	)
}

export default ContentSkills;