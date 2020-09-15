import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ErrorImg from '../../igifexstyles/images/errornotfound.gif';
import '../../igifexstyles/ErrNotFound.css';
import { Helmet } from 'react-helmet'

class ErrNotFound extends Component {

render() {

	const seo = {
		title: "Error 404 | Page Not Found",
		description: "The page you are looking for is not currently available.",
		url: '',
		image: ""
	};


const allRenderedicons = document.querySelectorAll('.rendered-icons');
 if(allRenderedicons.length > 0) { 
   allRenderedicons.forEach(icon => {
     icon.style.display = 'none';
   })
 }

	return ( 
		<div className="err-not-found">
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
			{ property: "og:image:type", content: "" },
			{ property: "og:twitter:image:src", content: seo.image },
			{ property: "og:twitter:title", content: seo.title },
			{ property: "og:twitter:description", content: seo.description }
			]}

		 />
			<div>
				<img src={ErrorImg} alt="Error404" draggable="false" />
				<h3>Page Not Found<span role="img" aria-label="sad emoji">😢</span></h3>
				<Link to="/"> Go Home </Link>
			</div>
		</div>
		);
}

};

export default ErrNotFound;