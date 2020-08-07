import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import MainPage from './components/MainPage/MainPage'
import Messages from './components/Messages/Messages'

const App = () => {
	return (
		<div className="bgi">
			<div className="container">
				<container className="wrapper">

					<Header />
					<Sidebar />
					{/* <MainPage /> */}
					<div class="main-content">
						<Messages />
					</div>

				</container>
			</div>
		</div>
	)
}

export default App