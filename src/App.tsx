import { useState, Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/header.component'
import SiteFooter from './components/site-footer/site-footer.component'
import ScrollToTopButton from './components/scroll-to-top/scroll-to-top.component'
import LoaderComponent from './components/loader/loader.component'

import animationsAreOnContext from './contexts/animations.context'

import type { AnimationsContextValue } from './types/context'

import './App.scss'

const BlogPage = lazy(() => import('./pages/blog/blog.page'))
const ContactPage = lazy(() => import('./pages/contact/contact.page'))
const CrownClothingPage = lazy(() => import('./pages/crown-clothing/crown-clothing.page'))
const DrupexPage = lazy(() => import('./pages/drupex/drupex.page'))
const Error404Page = lazy(() => import('./pages/page-not-found/error-404.page'))
const FroggerPage = lazy(() => import('./pages/frogger/frogger.page'))
const HomePage = lazy(() => import('./pages/home/home.page'))
const ProjectsPage = lazy(() => import('./pages/projects/projects.page'))
const ResumePage = lazy(() => import('./pages/resume/resume.page'))
const SpodPage = lazy(() => import('./pages/spod/spod.page'))

function App() {
	const [animationsAreEnabled, setAnimationsAreEnabled] = useState(true)

	const animationsAreEnabledState: AnimationsContextValue = {
		animationsAreEnabled: { get: animationsAreEnabled, set: setAnimationsAreEnabled },
	}

	return (
		<animationsAreOnContext.Provider value={animationsAreEnabledState}>
			<div className="App">
				<Header />

				<Suspense fallback={<LoaderComponent loading={true} />}>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/contact-me" component={ContactPage} />
						<Route path="/resume" component={ResumePage} />
						<Route exact path="/blog" component={BlogPage} />
						<Route exact path="/projects" component={ProjectsPage} />
						<Route path="/projects/crown-clothing" component={CrownClothingPage} />
						<Route path="/projects/drupex" component={DrupexPage} />
						<Route path="/projects/spod" component={SpodPage} />
						<Route path="/projects/frogger" component={FroggerPage} />
						<Route component={Error404Page} />
					</Switch>
				</Suspense>

				<SiteFooter />
				<ScrollToTopButton />
			</div>
		</animationsAreOnContext.Provider>
	)
}

export default App
