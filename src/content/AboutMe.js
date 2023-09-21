import React from 'react';
import '../styles/AboutMe.css';
const AboutMe = () => {
	return (
		<div className="AboutMe">
			<div className="AboutMe-Intro">
				<p className="Title">About Me</p>
				<ul>
					<li>
						Full-Stack <b>Web Developer</b> and <b>Software Engineer.</b>
					</li>
					<li>{`Born in Las Vegas, NV --> now in Frisco, TX.`}</li>
					<li>Love learning new technologies! It's arguably my number ONE hobby.</li>
					<li>I just love learning in general, favorite show growing up, "How It's Made".</li>
				</ul>
			</div>
		</div>
	);
};
export default AboutMe;
