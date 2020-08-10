import React from 'react'
import s from './Chat.module.css'
import Contact from './Contact/Contact'
import Message from './Message/Message'
// import { NavLink } from 'react-router-dom'

const Chat = (props) => {
	return (
		<div className="main-content_margin">
			<div className={s.chat_wrapper}>

				<div className={s.contacts_wrapper}>
					<h4 className={s.title}>Contacts</h4>
					<Contact id="1" niсkname="Dimych Kuzyberdin" unread="5" time="12:34" message="Lorem ipsum dolor sit amet consectetur, adipisicing elit..." />
					<Contact id="2" niсkname="Petr Kharitonov" unread="9" time="12:34" message="Although VS Code has some great built-in functionality for Git" />
					<Contact id="3" niсkname="Alla Polyanskaya" unread="1" time="12:35" message="Lorem ipsum dolor sit amet consectetur, adipisicing elit adipisicing elit adipisicing elit" />
					<Contact id="4" niсkname="Svetlana Torgasheva" unread="" time="14:54" message="Who is there?" />
					<Contact id="5" niсkname="Tony Bochka" unread="" time="16:01" message="Dolor sit amet consectetur, adipisicing elit..." />
				</div>

				<div className={s.messages}>
					<h4 className={s.title}>Messages</h4>
					<Message message="Hi" />
					<Message message="How is your study?" />
					<Message message="I'am ok" />
				</div>
			</div>

		</div >
	)
}

export default Chat