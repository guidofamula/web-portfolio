import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

import './socialmedia.css'

const SocialMedia = () => {
	return (
		<div className="icons__social-media">
			<a href="https://www.linkedin.com/in/guido-famula/" target="_blank" rel="noreferrer">
				<AiFillLinkedin size="2rem" />
			</a>
			<a href="https://github.com/guidofamula" target="_blank" rel="noreferrer">
				<AiFillGithub size="2rem" />
			</a>
			<a href="https://www.instagram.com/guidofamula" target="_blank" rel="noreferrer">
				<AiFillInstagram size="2rem" />
			</a>
		</div>
	)
}

export default SocialMedia;