import { useRef } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/header.component'

import CrownClothingPage from './pages/crown-clothing/crown-clothing.page'
import ContactPage from './pages/contact/contact.page'
import DrupexPage from './pages/drupex/drupex.page'
import FroggerPage from './pages/frogger/frogger.page'
import HomePage from './pages/home/home.page'
import ResumePage from './pages/resume/resume.page'
import ProjectsPage from './pages/projects/projects.page'
import SpodPage from './pages/spod/spod.page'

import './App.scss'

function App() {
	const appRef = useRef(null)
	return (
		<div ref={appRef} className="App">
			<Header appDomElementRef={appRef} />

			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/contact-me" component={ContactPage} />
				<Route path="/resume" component={ResumePage} />
				<Route exact path="/projects" component={ProjectsPage} />
				<Route path="/projects/crown-clothing" component={CrownClothingPage} />
				<Route path="/projects/drupex" component={DrupexPage} />
				<Route path="/projects/spod" component={SpodPage} />
				<Route path="/projects/frogger" component={FroggerPage} />
			</Switch>
		</div>
	);
}

export default App;

// TODO
// Code split page routes and figure out how to split css bundles as well