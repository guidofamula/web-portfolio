import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

import './contactcta.css'

const SocialMedia = () => {
	return (
		<div className="cta__social-media">
			<a href="https://www.linkedin.com/in/guido-famula/" target="_blank" rel="noreferrer">
				<AiFillLinkedin  size="2rem" /> <p>Guido Famula</p>
			</a>
			<a href="https://github.com/guidofamula" target="_blank" rel="noreferrer">
				<AiFillGithub size="2rem" /> <p>guidofamula</p>
			</a>
			<a href="https://www.instagram.com/guidofamula" target="_blank" rel="noreferrer">
				<AiFillInstagram size="2rem" /> <p>@guidofamula</p>
			</a>
		</div>
	)
}

export default SocialMedia;