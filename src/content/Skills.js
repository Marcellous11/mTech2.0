import React from 'react';
import '../styles/Skills.css';
const Skills = () => {
	return (
		<div className="Skills">
			<h3 className="Title">Skills</h3>
			<div className="Skills" />
			<ul className="Skills-List">
				<h3 className="Skill-Sections">Languages </h3>
				<ul>
					<li>
						<p className="Skill-Title">JavaScript</p>
						<div className="Skills-Container">
							<div className="Skill-iso JavaScript" />
						</div>
					</li>
					<li>
						<p className="Skill-Title">Python is the best</p>
						<div className="Skills-Container">
							<div className="Skill-iso Python" />
						</div>
					</li>
					<li>
						<p className="Skill-Title">Node</p>
						<div className="Skills-Container">
							<div className="Skill-iso Node" />
						</div>
					</li>
					<li>
						<p className="Skill-Title">SQL </p>
						<div className="Skills-Container">
							<div className="Skill-iso SQL" />
						</div>
					</li>
					<li>
						<p className="Skill-Title">Java</p>
						<div className="Skills-Container">
							<div className="Skill-iso Java" />
						</div>
					</li>
					<li>
						<p className="Skill-Title">C++</p>
						<div className="Skills-Container">
							<div className="Skill-iso C" />
						</div>
					</li>
				</ul>

				<h3 className="Skill-Sections">Libraries </h3>
				<ul>
					<li>
						<p className="Skill-Title">React</p>
						<div className="Skills-Container">
							<div className="Skill-iso React" />
						</div>
					</li>
				</ul>

				<h3 className="Skill-Sections">Framework</h3>
				<ul>
					<li>
						<p className="Skill-Title">Express</p>
						<div className="Skills-Container">
							<div className="Skill-iso Express" />
						</div>
					</li>
					<li>
						<p className="Skill-Title">Flask</p>
						<div className="Skills-Container">
							<div className="Skill-iso Flask" />
						</div>
					</li>
				</ul>

				<h3 className="Skill-Sections">Other</h3>
				<ul>
					<li>
						<p className="Skill-Title">DOM Manipulation</p>
						<div className="Skills-Container">
							<div className="Skill-iso DOM" />
						</div>
					</li>
					<li>
						<p className="Skill-Title">Object Oriented Programming</p>
						<div className="Skills-Container">
							<div className="Skill-iso Oriented" />
						</div>
					</li>

					<li>
						<p className="Skill-Title">PostgreSQL</p>
						<div className="Skills-Container">
							<div className="Skill-iso PostgreSQL" />
						</div>
					</li>
					<li>
						<p className="Skill-Title">Git</p>
						<div className="Skills-Container">
							<div className="Skill-iso Git" />
						</div>
					</li>
					<li>
						<p className="Skill-Title">Ajax</p>
						<div className="Skills-Container">
							<div className="Skill-iso Ajax" />
						</div>
					</li>
					<li>
						<p className="Skill-Title">jQuery</p>
						<div className="Skills-Container">
							<div className="Skill-iso jQuery" />
						</div>
					</li>
				</ul>
			</ul>
		</div>
	);
};
export default Skills;
