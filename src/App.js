import { useRef, useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/header.component'

import BlogPage from './pages/blog/blog.page'
import ContactPage from './pages/contact/contact.page'
import CreditsPage from './pages/credits/credits.page'
import CrownClothingPage from './pages/crown-clothing/crown-clothing.page'
import DrupexPage from './pages/drupex/drupex.page'
import Error404Page from './pages/page-not-found/error-404.page'
import FroggerPage from './pages/frogger/frogger.page'
import HomePage from './pages/home/home.page'
import ProjectsPage from './pages/projects/projects.page'
import ResumePage from './pages/resume/resume.page'
import SpodPage from './pages/spod/spod.page'
import ToptalBlogpostPage from './pages/toptal-blogpost/toptal-blogpost.page'

import animationsAreOnContext from './contexts/animations.context'

import './App.scss'

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
				<Route path="/blog/toptal-application" component={ToptalBlogpostPage} />
				<Route component={Error404Page} />
			</Switch>
		</div>
	);
}

export default App;