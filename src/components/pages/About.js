import React, { Fragment } from 'react';
import AboutSection from '../AboutSection';
import { Helmet } from 'react-helmet'
import siteImg from '../../igifexstyles/images/project-images/IG-Ifex-Site-Img.png'

const Home = () => {
	const seo = {
		title: "About - Gideon Idoko",
		description: "Gideon Idoko a self-taught developer who is interested in technology, programming, design, writing, research, blogging and community building. He aims at becoming a top-notch Software Engineer which he is painstakingly working towards to.",
		url: 'https://gideonidoko.netlify.app/about',
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
				<AboutSection />
			</div>
		</Fragment>
		);

}

export default Home;

	