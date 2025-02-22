import React from "react";
import "../Styles/Footer.css";
import logo from "../Assets/metapass transparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<footer>
			<center>
				<hr className="separator" />
			</center>
			<div className="footer-container">
				<div className="footer-col">
					<ul className="footer-links">
						<h3>Company</h3>
						<li>
							<a href="mailto:gm@metapasshq.xyz">
								gm@metapasshq.xyz
							</a>
						</li>
					</ul>
				</div>
				<div className="footer-col">
					<ul className="footer-links">
						<h3>Legal</h3>
						<li>
							<a href="/">Terms of Service</a>
						</li>
						<li>
							<a href="/">Privacy Policy</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="copyright">
				<small>
					Copyright © 2022 Metapass, Inc. All rights reserved.
				</small>
			</div>
		</footer>
	);
};

export default Footer;
