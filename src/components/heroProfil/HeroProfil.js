import React from 'react';

import fotoProfil from '../../assets/profil-guido.jpg';
import './heroProfil.css';

const HeroProfil = () => {
	return (
		<div className="hero__profil" id="home">
			<img src={fotoProfil} alt="Guido Famula" />
		</div>
	)
}

export default HeroProfil;