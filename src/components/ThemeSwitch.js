import React, { useState } from 'react';
import '../igifexstyles/ThemeSwitch.css';

const ThemeSwitch = () => {

const currentTheme = localStorage.getItem('ig-ifex-theme') ? localStorage.getItem('ig-ifex-theme') : null;

	const [theme, setTheme] = useState(currentTheme ? currentTheme : 'dark');
/*
	console.log('currentTheme is '+currentTheme+' and type is '+typeof currentTheme);
	console.log('theme state is '+theme+' and type is '+typeof theme);	*/



	const handleSwitch = () => {
		// console.log('Switch clicked');
		if (theme === 'dark') {
			setTheme('light');
			localStorage.setItem('ig-ifex-theme', 'light');
		} else {
			setTheme('dark');
			localStorage.setItem('ig-ifex-theme', 'dark');
		}
	}

	document.documentElement.setAttribute('data-theme', theme);

	return (
		<div className="theme-switch" onClick={handleSwitch}>
             <i className={theme === 'dark' ? "far fa-moon" : "fas fa-sun"}></i>
         </div>
		);
}

export default ThemeSwitch;