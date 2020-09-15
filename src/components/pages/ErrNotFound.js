import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ErrorImg from '../../igifexstyles/images/errornotfound.gif';
import '../../igifexstyles/ErrNotFound.css';

class ErrNotFound extends Component {

render() {

const allRenderedicons = document.querySelectorAll('.rendered-icons');
 if(allRenderedicons.length > 0) { 
   allRenderedicons.forEach(icon => {
     icon.style.display = 'none';
   })
 }

	return ( 
		<div className="err-not-found">
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