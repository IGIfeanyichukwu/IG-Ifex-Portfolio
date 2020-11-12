import React, { Fragment } from 'react';


const IconFill = () => {


const colors = ["#E14B5A", "#FFD037", "#575988", "#F7C4A7", "#01c447"];

const allIcons = ["<i class='fab fa-php'></i>", "<i class='fab fa-git'></i>", "<i class='fab fa-css3'></i>", "<i class='fab fa-html5'></i>", "<i class='fab fa-js'></i>", "<i class='fab fa-linux'></i>", "<i class='fab fa-npm'></i>", "<i class='fab fa-react'></i>", "<i class='fab fa-sass'></i>"]

const numOfIcons = 50;
const icons = [];


const allRenderedicons = document.querySelectorAll('.rendered-icons');
console.log(allRenderedicons.length);

if(allRenderedicons.length < numOfIcons){
  for (let i = 0; i < numOfIcons; i++) {
    let icon = document.createElement("div");
    icon.classList.add("rendered-icons");
    // icon.style.background = colors[Math.floor(Math.random() * colors.length)];
    icon.style.background = 'transparent';
    icon.style.left = `${Math.floor(Math.random() * 95)}vw`;
    icon.style.top = `${Math.floor(Math.random() * 95)}vh`;
    icon.style.transform = `scale(${Math.random()})`;
    icon.style.width = `${Math.random()}em`;
    icon.style.height = icon.style.width;
    icon.innerHTML = allIcons[Math.floor(Math.random() * allIcons.length)];
    icon.style.color = colors[Math.floor(Math.random() * colors.length)];
    icon.style.fontSize = `${(Math.random()*15)+15}px`;
    icons.push(icon);
    document.body.append(icon);
  }
}

 if(allRenderedicons.length > 0) { 
   allRenderedicons.forEach(icon => {
     icon.style.display = 'block';
   })
 }


  return (
    <Fragment></Fragment>
    );
}

export default IconFill;