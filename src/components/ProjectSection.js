import React, { useEffect } from 'react';
import BottomNav from './BottomNav';
import AllProjects from './AllProjects';
import '../igifexstyles/ProjectSection.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

 const ProjectSection = () => {

const allRenderedicons = document.querySelectorAll('.rendered-icons');
 if(allRenderedicons.length > 0) { 
   allRenderedicons.forEach(icon => {
     icon.style.display = 'none';
   })
 }



	return (
		<div className="project-section">
			<h2 className="ps-head-txt">Featured Projects<span className="dash"></span></h2>
			<p>Below are some of the fun projects I've worked on.</p>
			<ul className='project-list'>
				<AllProjects />
			</ul>

			<BottomNav forward="about" />
		</div>
	)
}	


export default ProjectSection;