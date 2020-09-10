import React from 'react';
import { Link } from 'react-router-dom';
import '../igifexstyles/BottomNav.css';


const BottomNav = ({ forward, backward }) => {

	const firstLetterCap = (string) => string.charAt(0).toUpperCase() + string.slice(1);

	return (
		<div className="bottom-nav">
			<div className="bf-nav">
				<Link to={backward ? `/${backward}` : "/"}><i className="fas fa-arrow-left"></i> {backward ? firstLetterCap(backward) : "Home" }</Link>
				<Link to={forward ? `/${forward}` : "/"}>{forward ? firstLetterCap(forward) : 'Home'} <i className="fas fa-arrow-right"></i></Link>
			</div>

		</div>
		);
}


export default BottomNav;