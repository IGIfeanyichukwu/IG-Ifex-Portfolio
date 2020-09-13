import React, { useState } from 'react';
import iabImg from '../igifexstyles/images/iab.jpg';
import IfexPortHomeImg from '../igifexstyles/images/project-images/IG-Ifex-Site-Img.png';
import brPrevierImg from '../igifexstyles/images/project-images/border-radius-previewer-img.png';



const AllProjects = () => {

	 const [theProjects, setTheProjects] = useState([
    {
    	id: 1,
    	name: 'IG-Ifex Portfolio Site',
    	about: 'Portfolio Site for I.G Ifeanyichukwu.',
    	tech: 'React.',
    	githubLink: 'https://github.com/IGIfeanyichukwu/IG-Ifex-Portfolio',
    	liveLink: '',
    	image: IfexPortHomeImg,
    	imgAlt: "screenshot of I.G Ifex Portfolio Site's Homepage",
    	imageTitle: 'I.G Ifex Portfolio Screenshot'
    },
    {
    	id: 2,
    	name: 'Border Radius Previewer',
    	about: 'An app that previews how a border radius will look like and generates the corresponding CSS code for the border radius.',
    	tech: 'Html + CSS + JavaScript.',
    	githubLink: 'https://github.com/IGIfeanyichukwu/border-radius-previewer',
    	liveLink: 'https://IGIfeanyichukwu.github.io/border-radius-previewer',
    	image: brPrevierImg,
    	imageAlt: 'Screenshot of Border-Radius Previewer Environment',
    	imageTitle: ''
    },
    {
    	id: 3,
    	name: 'Third Project',
    	about: 'This is the third project',
    	tech: 'Html + Css',
    	githubLink: '',
    	liveLink: '',
    	image: iabImg,
    	imageAlt: '',
    	imageTitle: ''
    },
    {
    	id: 4,
    	name: 'Fourth Project',
    	about: 'This is the fourth project',
    	tech: 'Html + Css',
    	githubLink: 'https://www.google.com',
    	liveLink: 'https://www.google.com',
    	image: iabImg,
    	imageAlt: '',
    	imageTitle: ''
    },
    {
    	id: 5,
    	name: 'Fifth Project',
    	about: 'This is the fifth project',
    	tech: 'Html + Css',
    	githubLink: 'https://www.google.com',
    	liveLink: 'https://www.google.com',
    	image: iabImg,
    	imageAlt: '',
    	imageTitle: ''
    }
 	]);

	return theProjects.map(function(project){
		if(project.githubLink !== '' && project.liveLink === '') {
		return (
			<li className="" >
				<img src={project.image} alt={project.imgAlt} />
				<div>
					<div>
						<h4>{project.name}</h4>
						<p>{project.about}</p>
						<p>Tech used: {project.tech}</p>
					</div>
					<div>


					<a href={project.githubLink} target="_blank"><i className="fas fa-code-branch"> </i> Code</a>
					</div>
					
				</div>
			</li>
		)
	} else if(project.githubLink === '' && project.liveLink !=='') {
				return (
			<li className="">
				<img src={project.image} alt={project.imgAlt} title="an image" />
				<div>
					<div>
						<h4>{project.name}</h4>
						<p>{project.about}</p>
						<p>Tech used: {project.tech}</p>
					</div>
					<div>
					<a href={project.liveLink} target="_blank"><i className="far fa-eye"></i> View</a>
					</div>
					
				</div>
			</li>
		)
	} else if(project.githubLink === '' && project.liveLink ==='') {
				return (
			<li className="">
				<img src={project.image} alt={project.imgAlt} />
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
			<li className="">
				<img src={project.image} alt={project.imgAlt} />
				<div>
					<div>
						<h4>{project.name}</h4>
						<p>{project.about}</p>
						<p>Tech used: {project.tech}</p>
					</div>
					<div>
					<a href={project.liveLink} target="_blank"><i className="far fa-eye"></i> View</a>

					<a href={project.githubLink} target="_blank"><i className="fas fa-code-branch"> </i> Code</a>
					</div>
					
				</div>
			</li>
		)
	}

	}

		);

}

export default AllProjects;