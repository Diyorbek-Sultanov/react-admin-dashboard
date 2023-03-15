import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import ThemeProvider from './providers/ThemeProvider'
import App from './App'

import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider>
			<Router>
				<App />
			</Router>
		</ThemeProvider>
	</React.StrictMode>,
)
