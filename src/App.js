import { useRef, Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/header.component'
import LoaderComponent from './components/loader/loader.component'

import CrownClothingPage from './pages/crown-clothing/crown-clothing.page'
import DrupexPage from './pages/drupex/drupex.page'
import FroggerPage from './pages/frogger/frogger.page'
import ProjectsPage from './pages/projects/projects.page'
import SpodPage from './pages/spod/spod.page'

import './App.scss'

const ContactPage = lazy(() => import('./pages/contact/contact.page'))
const HomePage = lazy(() => import('./pages/home/home.page'))
const ResumePage = lazy(() => import('./pages/resume/resume.page'))

function App() {
	const appRef = useRef(null)
	return (
		<div ref={appRef} className="App">
			<Header appDomElementRef={appRef} />

				<Suspense fallback={<LoaderComponent loading={true} />}>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/contact-me" component={ContactPage} />
						<Route path="/resume" component={ResumePage} />
					</Switch>
				</Suspense>

				<Switch>
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