import React from 'react'
import s from './Chat.module.css'
import Contact from './Contact/Contact'
import { NavLink } from 'react-router-dom'

const Chat = (props) => {
	return (
		<div className="main-content_margin">
			<div className={s.chat_wrapper}>

				<div className={s.contacts_wrapper}>
					<h4 className={s.title}>Contacts</h4>
					<Contact />
					<NavLink to="/Contact" activeClassName={s.activeLink}></NavLink>
					<Contact />
					<Contact />
					<Contact />
					<Contact />
				</div>

				<div className={s.messages}>
					<h4 className={s.title}>Messages</h4>

					<div className={s.message}>Hi</div>
					<div className={s.message}>How is your study?</div>
					<div className={s.message}>I'am ok</div>
				</div>
			</div>

		</div >
	)


}

export default Chat