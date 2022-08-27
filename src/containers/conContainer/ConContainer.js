import React from 'react';
import { Contact, ContactCta } from '../../components';

import './conContainer.css';
import './responsive/conresponsive.css';

const ConContainer = () => {
	return (
	<div className="cta__container" id="contact">
		<div className="cta__content">
			<h3>Want to involve me?</h3>
			<h5>For those of you who are interested in involving me in the projects you are currently working on, <b>feel free to contact me</b></h5>
		<ContactCta />
		</div>
		<Contact />
	</div>
	)
}

export default ConContainer;