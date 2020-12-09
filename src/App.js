import { useRef, useState, Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/header.component'
import LoaderComponent from './components/loader/loader.component'

import CrownClothingPage from './pages/crown-clothing/crown-clothing.page'
import DrupexPage from './pages/drupex/drupex.page'
import FroggerPage from './pages/frogger/frogger.page'
import ProjectsPage from './pages/projects/projects.page'
import SpodPage from './pages/spod/spod.page'

import animationsAreOnContext from './contexts/animations.context'

import './App.scss'

const ContactPage = lazy(() => import('./pages/contact/contact.page'))
const HomePage = lazy(() => import('./pages/home/home.page'))
const ResumePage = lazy(() => import('./pages/resume/resume.page'))

function App() {
	const appRef = useRef(null)

	// creating get and set methods for the state of animations
	const [animationsAreEnabled, setanimationsAreEnabled] = useState(true)

	const animationsAreEnabledState = {
		animationsAreEnabled: { get: animationsAreEnabled, set: setanimationsAreEnabled }
	}

	return (
		<div ref={appRef} className="App">
			<Header appDomElementRef={appRef} />

				<Suspense fallback={<LoaderComponent loading={true} />}>
					<Switch>
						<Route exact path="/">
							<animationsAreOnContext.Provider value={animationsAreEnabledState}>
								<HomePage />
							</animationsAreOnContext.Provider>
						</Route>
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