import { useRef } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/header.component'

import HomePage from './pages/home/home.page'

import './App.scss'

function App() {
	const appRef = useRef(null)
	return (
		<div ref={appRef} className="App">
			<Header appDomElementRef={appRef} />

			<Switch>
				<Route exact path="/" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
