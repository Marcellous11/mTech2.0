import React from 'react';

import '../styles/Work.css';
const Work = () => {
	return (
		<div className="Work">
			<div className="Work-Intro">
				<p className="Title">Work History</p>

				<p className="Work-Job">Software Engineering Coding Bootcamp, Remote</p>

				<p className="Work-Date">01/2022 -01/2023</p>
				<p className="Work-Position">Software Engineer</p>
				<ul className="Work-Detail">
					<li>
						<b>800+ hours</b> of hands-on intensive course material on Software Engineering methodologies
						and 1:1 industry expert mentor oversight.
					</li>
					<li>
						{' '}
						<b>Built and designed APIs</b> to feed data demanded by web server.
					</li>
					<li>
						Created web scrappers that store data into a <b>PostgreSQL database.</b>{' '}
					</li>
					<li>Practiced analytical approached to problem-solving and trouble shooting.</li>
				</ul>
				<p className="Work-Job">Personal Website “Marcellous.tech”, Remote</p>
				<p className="Work-Date">02/2023</p>
				<p className="Work-Position">Front-end developer</p>
				<ul className="Work-Detail">
					<li>
						{' '}
						Programmed website in <b>JavaScript</b> using the <b>React </b> library.
					</li>
					<li>Secured website’s SSL using Cloudflare.</li>
					<li>
						Designed website with all <b>custom CSS</b> classes.
					</li>
					<li>
						{' '}
						<b>Created web scrappers</b> that store data into PostgreSQL database.
					</li>
					<li>
						Self-motivated to create a brand that represents my{' '}
						<b style={{ color: 'white' }}>love for computers </b> and eye for design.
					</li>
				</ul>
				<p className="Work-Job">Lift Energy Solar, Fresno, CA</p>
				<p className="Work-Date">03/2021-08/2021</p>
				<p className="Work-Position"> Solar Sales Associate</p>
				<ul className="Work-Detail">
					<li> Sold 6 solar systems over the course of 3 months totaling over 40kW.</li>
					<li>Knocked on an average of 100 doors per day for 1 month.</li>
					<li>
						Streamlined sales process by performing both roles of initial contact associate and sales
						representative after 1 month.
					</li>
				</ul>

				<p className="Work-Job">Invoke Inc Public Sector, Frisco (remote), TX</p>
				<p className="Work-Date">04/2023 - Current</p>
				<p className="Work-Position">Inteligent Automation Consultant</p>
				<ul className="Work-Detail">
					<li>Goverment contracted to consult airman on builing automation. Involves remote work and onsite work at Air Force bases. Requires Common Access clearance.</li>
                    <li>Work with a variety of software including: UiPath, C#, VB, Python and more.</li>
					<li>Build and test more complex automations. Followed up with post completion support.</li>
				</ul>
			</div>
		</div>
	);
};
export default Work;
