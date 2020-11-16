import { useRef } from 'react'

import Header from './components/header/header.component'

import './App.scss'

function App() {
	const appRef = useRef(null)
	return (
		<div ref={appRef} className="App">
			<Header appDomElementRef={appRef} />
		</div>
	);
}

export default App;
