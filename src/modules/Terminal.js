import React, { useState } from 'react';
import '../styles/Terminal.css';
import TermData from '../content/TermData';
import { TypeAnimation } from 'react-type-animation';
import { v4 as uuid } from 'uuid';
import { BiRightArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AboutMe from '../content/AboutMe';
import Projects from '../content/Projects';
import Skills from '../content/Skills';
import Work from '../content/Work';

function Terminal() {
	let START = [];
	const INITAL_VALUE = { cLine: '' };
	const [ cliData, setCliData ] = useState(INITAL_VALUE);
	const [ commands, setCommands ] = useState(START);
	const [ display, setDisplay ] = useState(true);
	const navigate = useNavigate();

	document.addEventListener('keydown', function(event) {
		if (event.key === 'X' || event.key === 'x') {
			navigate('/');
		}
	});

	//Keeps track of text on command line
	const onChange = (e) => {
		const { name, value } = e.target;

		setCliData((cliData) => ({
			...cliData,
			[name]: value
		}));
	};

	// handles the submission of the commandline
	const onSubmit = (e) => {
		e.preventDefault();
		let line = document.querySelector('#cLine');
		let command = cliData.cLine.trim();

		if (command !== '') {
			setCommands((old) => [ ...old, command.toLowerCase() ]);
			setCliData(INITAL_VALUE);
		}
		setTimeout(() => {
			line.scrollIntoView();
		}, 100);
	};

	const changeDisplay = (e) => {
		setDisplay((state) => !state);

		// Change background color when swithcing from terminal and easy mode
	};

	return (
		<div className="T">
			<div className="Terminal" style={{ display: display ? 'block' : 'none' }}>
				<div className="Terminal-Menu">
					<div className="Terminal-Menu-btn" id="rBtn" style={{ backgroundColor: 'red' }} />
					<div className="Terminal-Menu-btn" style={{ backgroundColor: 'rgb(254,191,79)' }} />
					<div className="Terminal-Menu-btn" style={{ backgroundColor: 'green' }} />
				</div>
				<div className="Terminal-window">
					{/* Terminal opens */}
					<div className="Terminal-window-history">
						<TypeAnimation
							sequence={[ 'Welcome to my terminal. Type "help" to get started' ]}
							speed={75}
							cursor={false}
						/>

						{commands.map((command) => (
							<TermData key={uuid()} command={command} setCommands={setCommands} />
						))}
					</div>
					<div className="Terminal-CL">
						<form onSubmit={onSubmit}>
							<label htmlFor="cLine">
								.
								<BiRightArrow color="white" />
							</label>

							<input
								name="cLine"
								id="cLine"
								type={'text'}
								onChange={onChange}
								value={cliData.cLine}
								autoFocus="autofocus"
								autoComplete="off"
								spellCheck="false"
							/>
						</form>
					</div>
				</div>
			</div>
			<div className="Terminal-Made-Easy" style={{ display: display ? 'none' : 'block' }}>
				<h1>
					<TypeAnimation sequence={[ 'Welcome to my Webpage' ]} speed={75} cursor={true} />
				</h1>
				<div className="Terminal-Made-Easy-Grid">
					<AboutMe />
				</div>
				<div className="Terminal-Made-Easy-Grid">
					<Skills />
				</div>
				<div className="Terminal-Made-Easy-Grid">
					<Work />
				</div>
				<div className="Terminal-Made-Easy-Grid">
					<Projects />
				</div>
			</div>

			<div className="Terminal-Return">
				<a onClick={changeDisplay}> {display ? 'made easy' : 'Terminal'}</a>
			</div>
			<div className="Terminal-Return">
				<Link to={'/'}> {'<- return'}</Link>
			</div>
		</div>
	);
}

export default Terminal;
