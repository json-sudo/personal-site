import { useRef } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/header.component'

import HomePage from './pages/home/home.page'
import ResumePage from './pages/resume/resume.page'
import ProjectsPage from './pages/projects/projects.page'

import './App.scss'

function App() {
	const appRef = useRef(null)
	return (
		<div ref={appRef} className="App">
			<Header appDomElementRef={appRef} />

			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/resume" component={ResumePage} />
				<Route exact path="/projects" component={ProjectsPage} />
			</Switch>
		</div>
	);
}

export default App;
