import { useRef, useState, Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/header.component'
import LoaderComponent from './components/loader/loader.component'

import animationsAreOnContext from './contexts/animations.context'

import './App.scss'

const BlogPage = lazy(() => import('./pages/blog/blog.page'))
const ContactPage = lazy(() => import('./pages/contact/contact.page'))
const CreditsPage = lazy(() => import('./pages/credits/credits.page'))
const CrownClothingPage = lazy(() => import('./pages/crown-clothing/crown-clothing.page'))
const DrupexPage = lazy(() => import('./pages/drupex/drupex.page'))
const Error404Page = lazy(() => import('./pages/page-not-found/error-404.page'))
const FroggerPage = lazy(() => import('./pages/frogger/frogger.page'))
const HomePage = lazy(() => import('./pages/home/home.page'))
const ProjectsPage = lazy(() => import('./pages/projects/projects.page'))
const ResumePage = lazy(() => import('./pages/resume/resume.page'))
const SpodPage = lazy(() => import('./pages/spod/spod.page'))

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
					<Route path="/credits" component={CreditsPage} />
					<Route exact path="/blog" component={BlogPage} />
					<Route exact path="/projects" component={ProjectsPage} />
					<Route path="/projects/crown-clothing" component={CrownClothingPage} />
					<Route path="/projects/drupex" component={DrupexPage} />
					<Route path="/projects/spod" component={SpodPage} />
					<Route path="/projects/frogger" component={FroggerPage} />
					<Route component={Error404Page} />
				</Switch>
			</Suspense>
		</div>
	);
}

export default App;