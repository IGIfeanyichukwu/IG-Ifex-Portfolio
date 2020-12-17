import React, { Fragment } from 'react';
import ContactSection from '../ContactSection';
import { Helmet } from 'react-helmet'
// import siteImg from '../../igifexstyles/images/project-images/IG-Ifex-Site-Img.png'

const Home = () => {

	const seo = {
		title: "Contact - Gideon Idoko",
		description: "Do you have a project in mind? Do you have a project that needs a fix? Do you want me to collaborate with you in a project or want to get to know me more? Ifeanyichukwu Gideon Idoko is currently open to jobs and opportunites.",
		url: 'https://gideonidoko.netlify.app/contact',
		image: null
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
				<ContactSection />
			</div>
		</Fragment>
		);

}

export default Home;

	