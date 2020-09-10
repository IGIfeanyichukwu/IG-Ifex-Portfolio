import React, { useState } from 'react';
import iabImg from '../igifexstyles/images/iab.jpg';


const AllProjects = () => {

	 const [theProjects, setTheProjects] = useState([
    {
    	id: 1,
    	name: 'Ifex Portfolio Site',
    	about: 'Portfolio Site for I.G Ifeanyichukwu',
    	tech: 'React',
    	githubLink: 'www.google.com',
    	liveLink: 'www.google.com',
    	image: iabImg,
    	imgAlt: 'screenshot of I.G Ifex Portfolio Site',
    	imageTitle: 'I.G Ifex Portfolio Screenshot'
    },
    {
    	id: 2,
    	name: 'Second Project',
    	about: 'This is the second project',
    	tech: 'Html + Css',
    	githubLink: 'www.google.com',
    	liveLink: 'www.google.com',
    	image: iabImg,
    	imageAlt: '',
    	imageTitle: ''
    },
    {
    	id: 3,
    	name: 'Third Project',
    	about: 'This is the second project',
    	tech: 'Html + Css',
    	githubLink: 'www.google.com',
    	liveLink: 'www.google.com',
    	image: iabImg,
    	imageAlt: '',
    	imageTitle: ''
    },
    {
    	id: 4,
    	name: 'Forth Project',
    	about: 'This is the second project',
    	tech: 'Html + Css',
    	githubLink: 'www.google.com',
    	liveLink: 'www.google.com',
    	image: iabImg,
    	imageAlt: '',
    	imageTitle: ''
    },
    {
    	id: 5,
    	name: 'Fifth Project',
    	about: 'This is the second project',
    	tech: 'Html + Css',
    	githubLink: 'www.google.com',
    	liveLink: 'www.google.com',
    	image: iabImg,
    	imageAlt: '',
    	imageTitle: ''
    }
 	]);

const pjImgStyle = {
	width: '300px',
	height: '300px',
	borderRadius: '1px solid green'
}

	return theProjects.map((project) => (
			<li className="activate-zoom">
				<div>
				<h4>{project.name}</h4>
				<img  style={pjImgStyle} src={project.image} alt={project.imgAlt} />
				<p>testing para</p>
				</div>
			</li>
		));
}

export default AllProjects;