import React from 'react';
import ProfilFoto from '../../assets/profil-guido.jpg';
import './footer.css';

const Footer = () => {
	return (
		<>
		<div className="footer__links">
			<div className="footer__links_brand">
				<img src={ProfilFoto} alt="Profil Foto" />
				<p>Guido Famula</p>
			</div>

			<div className="footer__links_div">
				<h4>Get in touch</h4>
				<p>Pontianak, West Borneo, Indonesia</p>
				<a href="mailto:guidofamula29@gmail.com"><p>Email: guidofamula29@gmail.com</p></a>
			</div>
		</div>
		<div className="footer__copyright">
			<p>2022 GUIDO FAMULA. <br/><br/>Just a footer, it doesn't really matter</p>
		</div>
		</>
	)
}

export default Footer;