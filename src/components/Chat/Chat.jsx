import React from 'react'
import s from './Chat.module.css'
import Contacts from './Contacts/Contacts'
import Messages from './Messages/Messages'
// import { NavLink } from 'react-router-dom'

const Chat = (props) => {
	let contactsData = [
		{ id: 1, nickname: "Dimych Kuzyberdin", unread: 5, time: "12:34", message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit..." },
		{ id: 2, nickname: "Petr Kharitonov", unread: 9, time: "12:34", message: "Although VS Code has some great built-in functionality for Git" },
		{ id: 3, nickname: "Alla Polyanskaya", unread: 1, time: "12:35", message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit adipisicing elit adipisicing elit" },
		{ id: 4, nickname: "Svetlana Torgasheva", unread: '', time: "14:40", message: "Who is there?" },
		{ id: 5, nickname: "Tony Bochka", unread: '', time: "20:03", message: "Dolor sit amet consectetur, adipisicing elit" }
	]

	let messagesData = [
		{ id: 1, message: "Hi" },
		{ id: 2, message: "How is your study?" },
		{ id: 3, message: "I'am ok" },
		{ id: 4, message: "It's a good weather today" },
		{ id: 5, message: "I am learning js library - React" },
	]

	return (
		<div className="main-content_margin">
			<div className={s.chat_wrapper}>

				<div className={s.contacts_wrapper}>
					<h4 className={s.title}>Contacts</h4>
					<Contacts id={contactsData[0].id} nickname={contactsData[0].nickname} unread={contactsData[0].unread} time={contactsData[0].time} message={messagesData[messagesData.length - 1].message} />
					<Contacts id={contactsData[1].id} nickname={contactsData[1].nickname} unread={contactsData[1].unread} time={contactsData[1].time} message={messagesData[messagesData.length - 2].message} />
					<Contacts id={contactsData[2].id} nickname={contactsData[2].nickname} unread={contactsData[2].unread} time={contactsData[2].time} message={messagesData[messagesData.length - 3].message} />
					<Contacts id={contactsData[3].id} nickname={contactsData[3].nickname} unread={contactsData[3].unread} time={contactsData[3].time} message={messagesData[messagesData.length - 4].message} />
					<Contacts id={contactsData[4].id} nickname={contactsData[4].nickname} unread={contactsData[4].unread} time={contactsData[4].time} message={messagesData[messagesData.length - 5].message} />
				</div>

				<div className={s.messages}>
					<h4 className={s.title}>Messages</h4>
					<Messages message={messagesData[0].message} />
					<Messages message={messagesData[1].message} />
					<Messages message={messagesData[2].message} />
					<Messages message={messagesData[3].message} />
					<Messages message={messagesData[4].message} />
				</div>
			</div>

		</div >
	)
}

export default Chat