import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {gsap} from 'gsap';
import ThemeSwitch from './ThemeSwitch';
import FullscreenSwitch from './FullscreenSwitch';
import '../igifexstyles/Header.css';


const Header = () => {

const [menuOpen, setMenuOpen] = useState(false);
// let menuOpen = false;

  const handleMenuClick = (e) => {
    // console.log("MenuOpen is "+menuOpen);
    if(menuOpen){
      setTimeout(() => setMenuOpen(!menuOpen), 400);
      gsap.fromTo(".nav-left", {opacity: 1, transform: 'translateX(10px)'}, {opacity: 0, transform: 'translateX(-10px)', duration: 0.8, delay: 0});
      gsap.fromTo(".nav-right", {opacity: 1, transform: 'translateX(-10px)'}, {opacity: 0, transform: 'translateX(10px)', duration: 0.8, delay: 0});
      gsap.fromTo(".social-links", {opacity: 1, transform: 'translateY(-4rem)'}, {opacity: 0, transform: 'translateY(4rem)', duration: 0.8, delay: 0});
  } else {
    setMenuOpen(!menuOpen);
  }
}

window.addEventListener('popstate', function () {
  if(menuOpen === true) {
      setTimeout(() => setMenuOpen(false), 400);
      gsap.fromTo(".nav-left", {opacity: 1, transform: 'translateX(10px)'}, {opacity: 0, transform: 'translateX(-10px)', duration: 0.8, delay: 0});
      gsap.fromTo(".nav-right", {opacity: 1, transform: 'translateX(-10px)'}, {opacity: 0, transform: 'translateX(10px)', duration: 0.8, delay: 0});
      gsap.fromTo(".social-links", {opacity: 1, transform: 'translateY(-4rem)'}, {opacity: 0, transform: 'translateY(4rem)', duration: 0.8, delay: 0});
  }
});


if(menuOpen) {
    // isMenuOpen = true
    document.body.style.overflow = 'hidden';
    gsap.fromTo(".nav-left", {opacity: 0, transform: 'translateX(-10px)'}, {opacity: 1, transform: 'translateX(10px)', duration: 1, delay: 0.8});
    gsap.fromTo(".nav-right", {opacity: 0, transform: 'translateX(10px)'}, {opacity: 1, transform: 'translateX(-10px)', duration: 1, delay: 0.8});
    gsap.fromTo(".social-links", {opacity: 0, transform: 'translateY(4rem)'}, {opacity: 1, transform: 'translateY(-4rem)', duration: 1, delay: 0.8});

} else {
    document.body.style.overflow = 'auto';
}


  const getNavStyle = () => {
    if(menuOpen) {
      return {
        // display: "block",
        height: "100vh"
      }    
    } else {
      return {
        height: "0vh"
        // display: "none"
      }  
      }
  }


return (
		<header className={menuOpen ? "main-header make-fixed" : "main-header"}>
			{ /*Main Header*/ }
          <div className="logo">
           <h1 className="header-txt">IG-IFEX</h1>
           </div>
           <div className="main-header-nav">
           <div style={getNavStyle()} className="nav-bg nav-bg1"></div>
           <div style={getNavStyle()} className="nav-bg nav-bg2"></div>
           <nav style={getNavStyle()}>
               <div className="nav-left">
               <ul>
               	<li><NavLink onClick={handleMenuClick} to="/">Home</NavLink></li>
               	<li><NavLink onClick={handleMenuClick} to="/projects">Projects</NavLink></li>
               	<li><NavLink onClick={handleMenuClick} to="/about">About </NavLink></li>
                 </ul>
               </div>
               <div className="nav-right">
                 <ul>
                  <li><NavLink onClick={handleMenuClick} to="/contact">Contact</NavLink></li>
                   <li><a href="https://ig-ifex.hashnode.dev" target="_blank" rel="noopener noreferrer" onClick={handleMenuClick} >Blog</a></li>
                   <li><a href="javascript:void(0)">Résumé</a></li>
                 </ul>
               </div>  
               <div className="social-links">
                 <ul>
                   <li><a href="https://github.com/IGIfeanyichukwu" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                   <li><a href="https://codepen.io/IGIfeanyichukwu" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a></li>
                   <li><a href="https://twiiter.com/IGIfeanyichukwu" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                   <li><a href="https://linkedin.com/in/IGIfeanyichukwu" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                 </ul>
               </div>
           </nav>
           <FullscreenSwitch />
           <ThemeSwitch />
           <div className={menuOpen ? "menu-btn open" : "menu-btn"} onClick={handleMenuClick}>
              <div className="menu-btn-burger"></div>
            </div>

           </div>
		</header>
	);

}

export default Header;