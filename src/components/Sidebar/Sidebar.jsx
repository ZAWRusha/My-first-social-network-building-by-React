import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
	return <nav className="sidebar grid__item">
		<menu className="nav">
			<ul>
				<li><a href="/Profile">Profile</a></li>
				<li><a href="/Messages">Messages</a></li>
				<li><a href="/News">News</a></li>
				<li><a href="/Music">Music</a></li>
				<li><a href="/Settings">Settings</a></li>
			</ul>
		</menu>
	</nav>
}

export default Sidebar