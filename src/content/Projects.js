import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../styles/Projects.css';
import mTechgif from '../media/mTechGIF1.0.gif';
import leadersGIF from '../media/localLeadersGIF.gif';
import joblyGIF from '../media/joblyGIF.gif';
import yodlrGIF from '../media/YodlrGIF.gif';
import mTech2 from '../media/mTech2.0copy.gif';
const Projects = () => {
	return (
		<div className="Projects ">
			<p className="Title">Projects</p>
			<ul className="Projects-Mods">
				<li>
					<TypeAnimation cursor={false} sequence={[ 'First personal website' ]} />
					<a href="https://github.com/Marcellous11/marcellous.tech" target={'_blank'}>
						<img src={mTechgif} alt="A gif of my website" />
					</a>
				</li>
				<li>
					<TypeAnimation cursor={false} sequence={[ 'Website that shows local government officials' ]} />
					<a href="https://github.com/Marcellous11/full-local-leaders.git" target={'_blank'}>
						<img src={leadersGIF} alt="Gif of local leaders website" />
					</a>
				</li>
				<li>
					<TypeAnimation cursor={false} sequence={[ 'Jobly - Frontend Project' ]} />
					<a href="https://github.com/Marcellous11/React-Jobly/edit/main/README.md" target={'_blank'}>
						<img src={joblyGIF} alt="GIF of Jobly frontend" />
					</a>
				</li>
				<li>
					<TypeAnimation cursor={false} sequence={[ 'Yodlr - Frontend Project' ]} />
					<a href="https://github.com/Marcellous11/yolder_front_end/blob/main/README.md" target={'_blank'}>
						<img src={yodlrGIF} alt="GIF of Yodlr frontend" />
					</a>
				</li>
				<li>
					<TypeAnimation cursor={false} sequence={[ 'mTech2.0 - (this website!) Frontend' ]} />
					<a href="https://github.com/Marcellous11/mTech2.0.git" target={'_blank'}>
						<img src={mTech2} alt="GIF of Yodlr frontend" />
					</a>
				</li>
			</ul>
		</div>
	);
};
export default Projects;
