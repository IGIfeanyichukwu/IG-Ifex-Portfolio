import React, { useState } from 'react';
import '../igifexstyles/FullscreenSwitch.css';


const FullscreenSwitch = () => {

	const [isFullscreen, setIsFullscreen] = useState(false);

	const getFullscreenElement = () => {
		return document.fullscreenElement
			|| document.webkitFullscreenElemnt
			|| document.mozFullscreenElement
			|| document.msFullscreenElement;
	}

	const handleFullscreenSwitch = () => {
		console.log('The switch was clicked');

		if (getFullscreenElement()) {
			document.exitFullscreen();
		} else {
			document.documentElement.requestFullscreen().catch(e => {
				console.log(e);
			});
		}
	}

	document.addEventListener("fullscreenchange", () => {
		setIsFullscreen(!isFullscreen);
	});

	return (
		<div className="fullscreen-switch" onClick={handleFullscreenSwitch} title="fullscreen(dbl-click)">
			<i className={isFullscreen ? "fas fa-compress" : "fas fa-expand"}></i>
		</div>
		)
}

export default FullscreenSwitch;