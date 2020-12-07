import { useRef, Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/header.component'
import LoaderComponent from './components/loader/loader.component'

import './App.scss'

const ContactPage = lazy(() => import('./pages/contact/contact.page'))
const CrownClothingPage = lazy(() => import('./pages/crown-clothing/crown-clothing.page'))
const DrupexPage = lazy(() => import('./pages/drupex/drupex.page'))
const HomePage = lazy(() => import('./pages/home/home.page'))
const ProjectsPage = lazy(() => import('./pages/projects/projects.page'))
const FroggerPage = lazy(() => import('./pages/frogger/frogger.page'))
const ResumePage = lazy(() => import('./pages/resume/resume.page'))
const SpodPage = lazy(() => import('./pages/spod/spod.page'))

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
					<Route exact path="/projects" component={ProjectsPage} />
					<Route path="/projects/crown-clothing" component={CrownClothingPage} />
					<Route path="/projects/drupex" component={DrupexPage} />
					<Route path="/projects/spod" component={SpodPage} />
					<Route path="/projects/frogger" component={FroggerPage} />
				</Switch>
			</Suspense>
		</div>
	);
}

export default App;