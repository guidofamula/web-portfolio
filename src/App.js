import React from 'react';
import { AboutContainer, ConContainer, HeadContainer, NavContainer, ProContainer, SkillContainer, FootContainer } from './containers';

import './App.css';

const App = () => {
	return (
		<div>
			<NavContainer />
			<HeadContainer />
			<AboutContainer />
			<ProContainer />
			<SkillContainer />
			<ConContainer />
			<FootContainer />
		</div>
	)
}

export default App;