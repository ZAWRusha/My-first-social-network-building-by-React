import React from 'react'
import s from './Chat.module.css'
import Contact from './Contact/Contact'
// import { NavLink } from 'react-router-dom'

const Chat = (props) => {
	return (
		<div className="main-content_margin">
			<div className={s.chat_wrapper}>

				<div className={s.contacts_wrapper}>
					<h4 className={s.title}>Contacts</h4>
					<Contact id="1" niсkname="Dimych Kuzyberdin" message="Lorem ipsum dolor sit amet consectetur, adipisicing elit..." unread="5" />
					<Contact id="2" niсkname="Petr Kharitonov" message="Although VS Code has some great built-in functionality for Git" unread="9" />
					<Contact id="3" niсkname="Alla Polyanskaya" message="Lorem ipsum dolor sit amet consectetur, adipisicing elit adipisicing elit adipisicing elit" unread="1" />
					<Contact id="4" niсkname="Svetlana Torgasheva" message="Who is there?" unread="" />
					<Contact id="5" niсkname="Tony Bochka" message="Dolor sit amet consectetur, adipisicing elit..." unread="" />
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