import React from 'react';
import AboutMe from './AboutMe';
import Help from './Help';
import Work from './Work';
import Projects from './Projects';
import Skills from './Skills';
import { BiRightArrow } from 'react-icons/bi';
import '../styles/TermData.css';

const TermData = ({ command, setCommands }) => {
	switch (command) {
		case 'help':
			return (
				<div className="TermData">
					<BiRightArrow className="marker" />
					<span className="old-command">guest@marcellous.tech % {command}</span>

					<Help command={command} />
				</div>
			);
		case 'about me':
			return (
				<div className="TermData">
					<BiRightArrow className="marker" />{' '}
					<span className="old-command">guest@marcellous.tech % {command}</span>
					<AboutMe command={command} />
				</div>
			);
		case 'skills':
			return (
				<div className="TermData">
					<BiRightArrow className="marker" />{' '}
					<span className="old-command">guest@marcellous.tech % {command}</span>
					<Skills command={command} />
				</div>
			);
		case 'work':
			return (
				<div className="TermData">
					<BiRightArrow className="marker" />{' '}
					<span className="old-command">guest@marcellous.tech % {command}</span>
					<Work command={command} />
				</div>
			);
		case 'projects':
			return (
				<div className="TermData">
					<BiRightArrow className="marker" />{' '}
					<span className="old-command">guest@marcellous.tech % {command}</span>
					<Projects command={command} />
				</div>
			);
		case 'all':
			return (
				<div className="TermData">
					<div>
						<BiRightArrow className="marker" />{' '}
						<span style={{ display: 'inline-block' }} className="old-command">
							guest@marcellous.tech % {command}
						</span>
					</div>

					<Help command={command} />
					<AboutMe command={command} />
					<Skills command={command} />
					<Work command={command} />
					<Projects command={command} />
				</div>
			);
		case 'clear':
			setCommands([]);
			break;
		case 'easter egg':
			return <p>easter egg command</p>;
		default:
			return (
				<div className="TermData">
					<BiRightArrow className="marker" color="red" />
					<span style={{ color: 'red', marginLeft: '.3em' }} className="old-command">
						Command not found : "{command}"
					</span>
					<span style={{ marginLeft: '2rem', color: 'rgb(186,184,75)' }}>Enter "help" for more commands</span>
				</div>
			);
	}
};

export default TermData;
