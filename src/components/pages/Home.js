import React, { Fragment } from 'react';
import WlcSection from '../WlcSection';
import { Helmet } from 'react-helmet'
import siteImg from '../../igifexstyles/images/project-images/IG-Ifex-Site-Img.png'

const Home = () => {

	const seo = {
		title: "I.G Ifex - Frontend Developer",
		description: "I.G Ifeanyichukwu is a creative Frontend Developer. He builds visually appealing fully responsive websites and applications using awesome technologies like CSS, JavaScript and PHP basically.",
		url: 'https://ig-ifex.netlify.app',
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
			<div className="home-main">
				<WlcSection />
			</div>
		</Fragment>
		);

}

export default Home;

	