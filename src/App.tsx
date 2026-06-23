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
const Error404Page = lazy(() => import('./pages/page-not-found/error-404.page'))
const HomePage = lazy(() => import('./pages/home/home.page'))
const ProjectPage = lazy(() => import('./pages/project/project.page'))
const ProjectsPage = lazy(() => import('./pages/projects/projects.page'))
const ResumePage = lazy(() => import('./pages/resume/resume.page'))

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
						<Route path="/projects/:slug" component={ProjectPage} />
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
