import React from 'react'
import './Header.css'

const Header = () => {
	return <header className="header grid__item">
		<img src={require("../../img/logo.png")} alt="logo"></img>

		<h1>My first social network building by React</h1>
	</header>
}

export default Header