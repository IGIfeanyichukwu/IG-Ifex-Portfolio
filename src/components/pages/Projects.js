import React, { Fragment } from 'react';
import ProjectSection from '../ProjectSection';
import { Helmet } from 'react-helmet'
import siteImg from '../../igifexstyles/images/project-images/IG-Ifex-Site-Img.png'

const Projects = () => {

	const seo = {
		title: "Projects - Gideon Idoko",
		description: "Check out some of the fun projects Ifeanyichukwu Gideon Idoko has worked on.",
		url: 'https://gideonidoko.netlify.app/projects',
		image: siteImg
	};


	return(
		<Fragment>

		<Helmet

		title={seo.title}
		meta={[
			{
				name: "description",
				property: "og:description",
				content: seo.description
			},
			{ property: "og:title", content: seo.title },
			{ property: "og:url", content: seo.url },
			{ property: "og:image", content: seo.image },
			{ property: "og:image:type", content: "image/png" },
			{ property: "og:twitter:image:src", content: seo.image },
			{ property: "og:twitter:title", content: seo.title },
			{ property: "og:twitter:description", content: seo.description }
			]}

		 />

			<div className="main">
				<ProjectSection />
			</div>
		</Fragment>
		);

}

export default Projects;
