import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
	return <nav className="sidebar grid__item">
		<menu className="nav">
			<ul>
				<li><a href="">Profile</a></li>
				<li><a href="">Messages</a></li>
				<li><a href="">News</a></li>
				<li><a href="">Music</a></li>
				<li><a href="">Settings</a></li>
			</ul>
		</menu>
	</nav>
}

export default Sidebar