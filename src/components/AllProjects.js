import React, { useState } from 'react';
// import iabImg from '../igifexstyles/images/iab.jpg';
// import IfexPortHomeImg from '../igifexstyles/images/project-images/portfolio-cover.png';
import brPrevierImg from '../igifexstyles/images/project-images/borderradiuspreviewer-cover.png';
import cyprobarCover from '../igifexstyles/images/project-images/cyprobar-cover.png';
import sirimazoneCover from '../igifexstyles/images/project-images/sirimazone-cover.png';
import colorConverterCover from '../igifexstyles/images/project-images/colorconverter-cover.png';
import musicEcomUICover from '../igifexstyles/images/project-images/music-ecom-ui-cover.png';
import wiznugCover from '../igifexstyles/images/project-images/wiznug-cover.png';




const AllProjects = () => {

	 const [ theProjects ] = useState([
	{
    	id: 1,
    	name: 'Cyprobar',
    	about: 'A lightweight JavaScript libary used for creating circular progress bar. It\'s demo/doc site is built with tailwindCSS.',
    	tech: 'VanillaJS + Parcel + TailwindCSS',
    	githubLink: 'https://github.com/IamGideonIdoko/cyprobar',
    	liveLink: 'https://IamGideonIdoko.github.io/cyprobar',
    	image: cyprobarCover,
    	imgAlt: "view of cyprobar demo site",
    	imageTitle: 'Cyprobar'
    },
    {
    	id: 2,
    	name: 'Sirimazone',
    	about: 'A full stack movie store app with admin panel & content management system built with core PHP',
    	tech: 'SCSS + JavaScript + jQuery + AJAX + Parcel + PHP + PDO + MySQL',
    	githubLink: 'https://github.com/IamGideonIdoko/sirimazone',
    	liveLink: '',
    	image: sirimazoneCover,
    	imgAlt: "mockup of sirimazone's ui",
    	imageTitle: 'Sirimazone UI mockup'
    },
    {
    	id: 3,
    	name: 'Color Converter',
    	about: 'A web app that converts color values between 5 diff color models',
    	tech: 'HTML + CSS + VanillaJS',
    	githubLink: 'https://github.com/IamGideonIdoko/colorconverter',
    	liveLink: 'https://colorconverter.surge.sh',
    	image: colorConverterCover,
    	imgAlt: "view of color converter app",
    	imageTitle: 'Color Converter App'
    },
    {
    	id: 4,
    	name: 'Border Radius Previewer',
    	about: 'An app that previews how a border radius will look like and generates the corresponding CSS code for the border radius.',
    	tech: 'Html + CSS + VanillaJS.',
    	githubLink: 'https://github.com/IamGideonIdoko/border-radius-previewer',
    	liveLink: 'https://borderradiuspreviewer.surge.sh',
    	image: brPrevierImg,
    	imageAlt: 'view of border radius previewer app',
    	imageTitle: 'Border Radius Previewer App'
    },
    {
    	id: 5,
    	name: 'Wiznug Rest API',
    	about: 'A restful API for wise quotes from notable individuals.',
    	tech: 'PHP + MySQL',
    	githubLink: 'https://github.com/IamGideonIdoko/wiznug-rest-api',
    	liveLink: '',
    	image: wiznugCover,
    	imgAlt: "winug rest api cover",
    	imageTitle: 'Wiznug rest api cover'
    },
    {
    	id: 6,
    	name: 'Music Ecom UI',
    	about: 'An implementation of a music ecommerce single page ui.',
    	tech: 'HTML + SCSS + VanillaJS',
    	githubLink: 'https://github.com/IamGideonIdoko/music-ecom-ui',
    	liveLink: 'https://music-ecom-ui.surge.sh',
    	image: musicEcomUICover,
    	imgAlt: "view of music ecom ui",
    	imageTitle: 'Music Ecom UI Cover'
    }
 	]);

	return theProjects.map(function(project){
		if(project.githubLink !== '' && project.liveLink === '') {
		return (
			<li data-aos="fade-up" className="" key={project.id} >
				<img src={project.image} alt={project.imgAlt} draggable="false" />
				<div>
					<div>
						<h4>{project.name}</h4>
						<p>{project.about}</p>
						<p>Tech used: {project.tech}</p>
					</div>
					<div>


					<a href={project.githubLink} target="_blank" rel="noopener noreferrer"><i className="fas fa-code-branch"> </i> Code</a>
					</div>
					
				</div>
			</li>
		)
	} else if(project.githubLink === '' && project.liveLink !=='') {
				return (
			<li data-aos="fade-up" className="" key={project.id}>
				<img src={project.image} alt={project.imgAlt} draggable="false"  />
				<div>
					<div>
						<h4>{project.name}</h4>
						<p>{project.about}</p>
						<p>Tech used: {project.tech}</p>
					</div>
					<div>
					<a href={project.liveLink} target="_blank" rel="noopener noreferrer"><i className="far fa-eye"></i> View</a>
					</div>
					
				</div>
			</li>
		)
	} else if(project.githubLink === '' && project.liveLink ==='') {
				return (
			<li data-aos="fade-up" className="" key={project.id}>
				<img src={project.image} alt={project.imgAlt} draggable="false" />
				<div>
					<div>
						<h4>{project.name}</h4>
						<p>{project.about}</p>
						<p>Tech used: {project.tech}</p>
					</div>
					<div>
					</div>
					
				</div>
			</li>
		)
	} else {
				return (
			<li data-aos="fade-up" className="" key={project.id}>
				<img src={project.image} alt={project.imgAlt} draggable="false" />
				<div>
					<div>
						<h4>{project.name}</h4>
						<p>{project.about}</p>
						<p>Tech used: {project.tech}</p>
					</div>
					<div>
					<a href={project.liveLink} target="_blank" rel="noopener noreferrer"><i className="far fa-eye"></i> View</a>

					<a href={project.githubLink} target="_blank" rel="noopener noreferrer"><i className="fas fa-code-branch"> </i> Code</a>
					</div>
					
				</div>
			</li>
		)
	}

	}

		);

}

export default AllProjects;