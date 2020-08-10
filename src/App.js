import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter, Route } from 'react-router-dom'
import Profile from './components/Profile/Profile'
import Chat from './components/Chat/Chat'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

const App = () => {
	return (
		<BrowserRouter>
			<div className="bgi">
				<div className="container">
					<div className="wrapper">

						<Header />
						<Sidebar />
						<div className="main-content">
							<Route path='/Profile' component={Profile} />
							<Route path='/Chat' component={Chat} />
							<Route path='/News' component={News} />
							<Route path='/Music' component={Music} />
							<Route path='/Settings' component={Settings} />
						</div>

					</div>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App