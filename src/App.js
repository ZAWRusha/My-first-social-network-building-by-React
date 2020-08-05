import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainPage from './components/MainPage';

const App = () => {
	return (
		<div className="container">
			<container className="wrapper">

				<Header />
				<Sidebar />
				<MainPage />

			</container>
		</div>
	)
}

export default App;