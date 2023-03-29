import React from 'react';
import '../styles/Help.css';
const Help = () => {
	return (
		<div className="Help">
			<div className="Help-Options">
				<ul className="Help-Option-Ul">
					<li>
						{' '}
						<b>help</b> ...............Show all commands
					</li>
					<li>
						{' '}
						<b>about me</b>..................A short bio
					</li>
					<li>
						<b>skills</b>...................My strengths
					</li>
					<li>
						<b>work</b>.......Some of my work experience
					</li>
					<li>
						<b>projects</b>.........My favorite porjects
					</li>
					<li>
						<b>clear </b>...........Clear terminal window
					</li>
					<li style={{ color: 'rgb(0,214,0)' }}>
						{' '}
						<b>all</b> ..................Show everything
					</li>

					<li style={{ color: 'red' }}>
						<b style={{ color: 'red' }}>x </b>......................Leave Terminal
					</li>
				</ul>
				<ul className="Help-Option-Ul-Mini">
					<li>
						{' '}
						<b>help</b> <p> - Show all commands</p>
					</li>
					<li>
						{' '}
						<b>about me</b> <p> - A short bio</p>
					</li>
					<li>
						<b>skills</b>
						<p> - My strengths</p>
					</li>
					<li>
						<b>work</b> <p> - Some of my work experience</p>
					</li>
					<li>
						<b>clear </b>
						<p> - Clear terminal window</p>
					</li>
					<li>
						<b>projects</b>
						<p> - My favorite porjects</p>
					</li>
					<li style={{ color: 'rgb(0,214,0)' }}>
						<b>all</b> <p> - Show everything</p>
					</li>

					<li style={{ color: 'red' }}>
						<b>x </b> <p> - Leave Terminal</p>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Help;
