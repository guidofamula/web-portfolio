import React from 'react'
import Projects from './Projects';
import { project1, project2, project3, project4, project5, project6 } from '../../containers/proContainer/imports';

const Contents = () => {
	return (
	<>
	<div className="project__card1">
			<Projects 
			imageUrl={project1}
			title="Modern UI/UX Landing Page Web With React"
			desc="This web build on reactjs, with many components for usable and maintain the web, this static web suitable for landing page to introduce your services or products to potential prospects"
			linkVisit="https://guidofamula.github.io/landing-page-web01/" 
			linkSource="https://github.com/guidofamula/landing-page-web01"
			visit="Visit"
			source="Source Code"
			/>
	</div>
<div className="project__card2">
	<Projects 
		imageUrl={project2}
		title="Social Media App With MERN"
		desc="This web application is made using mongo, express, reactjs, nodejs. This is only an example in this portfolio, please check the source code via github below" 
		linkVisit="https://github.com/guidofamula" 
		linkSource="https://github.com/guidofamula/social-media-app"
		visit="Visit"
		source="Source Code"
		/>
	</div>
	<div className="project__card3">
		<Projects 
		imageUrl={project3}
		title="E-Commerce With NextJs & Sanity"
		desc="This online store market was created using NextJS, React, and using Sanity as a data platform for the online store. Working with Sanity and nextjs in it is suitable for complex e-commerce development" 
		linkVisit="https://github.com/guidofamula" 
		linkSource="https://github.com/guidofamula/e-commerce-sampling"
		visit="Visit"
		source="Source Code"
		/>
	</div>
	<div className="project__card4">
		<Projects 
		imageUrl={project4}
		title="Display Design of Each Catalog"
		desc="In this e-commerce there is no checkout page, the last one is still about adding and subtracting items before checkout is executed. These steps are created using NextJs in collaboration with Sanity platform capabilities as data storage" 
		linkVisit="https://github.com/guidofamula" 
		linkSource="https://github.com/guidofamula/e-commerce-sampling"
		visit="Visit"
		source="Source Code"
		/>
	</div>
	<div className="project__card5">
		<Projects 
		imageUrl={project5}
		title="Minimalist Personal Notes Website Application"
		desc="This web application is made using reactjs, with basic CRUD features, with the capabilities and abstractions of reactjs along with the necessary dependencies can make web development more efficient and interactive" 
		linkVisit="https://guidofamula.github.io/personal-notes-app/" 
		linkSource="https://github.com/guidofamula/personal-notes-app"
		visit="Visit"
		source="Source Code"
		/>
	</div>
	<div className="project__card6">
		<Projects 
		imageUrl={project6}
		title="Minimalist Landing Pages"
		desc="This static website page is created using basic javascript DOM, for minimalistic needs, With the arrangement of content using AIDA techniques, for interaction using javascript so that the website is more active and responsive, in this example javascript is used when displaying image albums better." 
		linkVisit="https://guidofamula.github.io/landing-page-web02/" 
		linkSource="https://github.com/guidofamula/landing-page-web02"
		visit="Visit"
		source="Source Code"
		/>
	</div>
	</>
	)
}

export default Contents;