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

const App = (props) => {

	return (
		<BrowserRouter>
			<div className="bgi">
				<div className="container">
					<div className="wrapper">

						<Header />
						<Sidebar />
						<div className="main-content">
							<Route path='/Profile' render={() => <Profile state={props.appState.profilePage} />} />
							<Route path='/Chat' render={() => <Chat state={props.appState.chatPage} />} />
							<Route path='/News' render={News} />
							<Route path='/Music' render={Music} />
							<Route path='/Settings' render={Settings} />
						</div>

					</div>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App