import React, { Fragment } from 'react';
import CursorView from './components/CursorView';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import './index.css';
// import Testing from './components/Testing.js';

const App = () => {

	return (
	<Router>
		<Fragment>
			<CursorView />
			<Header />
			<Route exact path='/' component={Home} />
			<Route path='/projects' component={Projects} />
			<Route path='/about' component={About} />
			<Route path='/contact' component={Contact} />
		</Fragment>
	</Router>
			)};

export default App;
