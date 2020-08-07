import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter, Route } from 'react-router-dom'
import Profile from './components/Profile/Profile'
import Messages from './components/Messages/Messages'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

const App = () => {
	return (
		<BrowserRouter>
			<div className="bgi">
				<div className="container">
					<container className="wrapper">

						<Header />
						<Sidebar />
						<div class="main-content">
							<Route path='/profile' component={Profile} />
							<Route path='/Messages' component={Messages} />
							<Route path='/News' component={News} />
							<Route path='/Music' component={Music} />
							<Route path='/Settings' component={Settings} />
						</div>

					</container>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App