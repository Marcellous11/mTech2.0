import React from 'react';
import './App.css';
import Terminal from './modules/Terminal';
import Home from './modules/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<ErrorBoundary fallback={<span>Soemthing as failed at home</span>}>
					<Routes>
						<Route path={'/'} element={<Home />} />

						<Route path={'/terminal'} element={<Terminal />} />
					</Routes>
				</ErrorBoundary>
			</BrowserRouter>
		</div>
	);
}

export default App;
