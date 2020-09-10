import React from 'react';
import { Link } from 'react-router-dom';
import '../igifexstyles/WlcSection.css';
import codingimg from '../igifexstyles/images/coding.svg';
import IconFill from './IconFill';


const WlcSection = () => {

return (
		<div className="welcome-section">
			<IconFill />
			<div className="ws-left">
			<h4 style={{opacity: '0.9'}}>Hey<span role="img" aria-label="wave emoji">👋</span>, I'm </h4>
			<h1 className="ifex-name">I. G Ifeanyichukwu.</h1>

			<h4 className='description'>I'm a creative <b style={{color: 'var(--primary-font-color)', opacity: '0.8'}}>Frontend Developer</b> based in Nigeria.</h4>
			<p>I build visually appealing fully responsive websites and applications using awesome technologies like <span className="op1">SASS</span>, <span className="op1">JavaScript</span> and <span className="op1">PHP</span> basically. Check out my <span className="op1 tool-link"><Link to="/about#toolbox" >toolbox</Link></span> for a comprehensive list of tools I currently work with.</p>
			<div className="cta-wrapper">
			<Link to="/projects" className="pbtn">My Projects</Link>
			</div>
			</div>
			<div className="ws-right">
				<img src={codingimg} alt="programmer illustration" width="300px"/>
			</div>
		</div>
	)
}

export default WlcSection;