import React from 'react';
import BottomNav from './BottomNav';
import Tools from './Tools';
// import Zoomerang from './Zoomerang';
import '../igifexstyles/AboutSection.css';

 const AboutSection = () => {


const allRenderedicons = document.querySelectorAll('.rendered-icons');
 if(allRenderedicons.length > 0) { 
   allRenderedicons.forEach(icon => {
     icon.style.display = 'none';
   })
 }

	return (
		<div className="about-section">
			<div className="about">
			<h2>About Me<span className="dash"></span></h2>
				<p>I'm a self-taught developer who is interested in technology, programming, design, writing, research, blogging and community building. I aim becoming a top-notch Software Engineer which I am painstakingly working towards to. I put in my very best in all I do and I go a long way to give the best shot, this has made me keen to discovering life changing tech ideas. I devote a good amount of my time to programming, solving real world problems and self-development. I would like to build the next big thing that will impact lives positively.</p>

				<p>I play cool sports like tennis, badminton. When I am not programming I'll probably be reading some articles, watching movies, engaging in my other hobbies or having a good time with my family.</p>

				<p>View my résumé here.</p>
			</div>
			<div className="toolbox-section">
				<h3 id="toolbox">Toolbox</h3>
				<p>Here are all the technologies I effectively use currently:</p>
				<ul className="tool-list">
					<Tools />
				</ul>
			</div>

			<BottomNav forward="contact" backward="projects" />
		</div>
	)
}	


export default AboutSection;