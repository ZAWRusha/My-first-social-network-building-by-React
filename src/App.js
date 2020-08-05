import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
	return (
		<div className="container">
			<container className="wrapper">

				<Header />
				<NavBar />
				<Profile />

			</container>
		</div>
	)
}

export default App;