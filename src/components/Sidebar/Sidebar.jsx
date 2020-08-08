import React from 'react';
import s from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
	return <nav className={`${s.sidebar} ${"grid__item"}`}>
		<menu className="nav">
			<ul>
				<li><NavLink to="/Profile" activeClassName={s.activeLink}>Profile</NavLink></li>
				<li><NavLink to="/Chat" activeClassName={s.activeLink}>Chat</NavLink></li>
				<li><NavLink to="/News" activeClassName={s.activeLink}>News</NavLink></li>
				<li><NavLink to="/Music" activeClassName={s.activeLink}>Music</NavLink></li>
				<li><NavLink to="/Settings" activeClassName={s.activeLink}>Settings</NavLink></li>
			</ul>
		</menu>
	</nav>
}

export default Sidebar