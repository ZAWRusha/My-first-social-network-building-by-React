import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import { Route } from 'react-router-dom'
import Profile from './components/Profile/Profile'
import Chat from './components/Chat/Chat'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Friends from './components/Friends/Friends'

const App = (props) => {
	return (
		<div className="bgi">
			<div className="container">
				<div className="wrapper">

					<Header />
					<Sidebar />
					<div className="main-content">
						<Route path='/Profile' render={() => <Profile
							profilePage={props.appState.profilePage}
							addPost={props.addPost}
							updateNewPostText={props.updateNewPostText}
						/>} />
						<Route path='/Chat' render={() => <Chat state={props.appState.chatPage} />} />
						<Route path='/News' render={News} />
						<Route path='/Music' render={Music} />
						<Route path='/Settings' render={Settings} />
						<Route path='/Friends' render={Friends} />
					</div>

				</div>
			</div>
		</div>
	)
}

export default App