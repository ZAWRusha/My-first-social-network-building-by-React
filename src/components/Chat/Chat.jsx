import React from 'react'
import s from './Chat.module.css'
import Contacts from './Contacts/Contacts'
import Messages from './Messages/Messages'
// import { NavLink } from 'react-router-dom'

const Chat = (props) => {

	// contacts data downloaded from the server
	let contactsData = [
		{ id: 1, nickname: "Dimych Kuzyberdin", unread: 5, time: "12:34", message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit..." },
		{ id: 2, nickname: "Petr Kharitonov", unread: 9, time: "12:34", message: "Although VS Code has some great built-in functionality for Git" },
		{ id: 3, nickname: "Alla Polyanskaya", unread: 1, time: "12:35", message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit adipisicing elit adipisicing elit" },
		{ id: 4, nickname: "Svetlana Torgasheva", unread: '', time: "14:40", message: "Who is there?" },
		{ id: 5, nickname: "Tony Bochka", unread: '', time: "20:03", message: "Dolor sit amet consectetur, adipisicing elit" }
	]

	// messages data downloaded from the server
	let messagesData = [
		{ id: 1, message: "Hi" },
		{ id: 2, message: "How is your study?" },
		{ id: 3, message: "I'am ok" },
		{ id: 4, message: "It's a good weather today" },
		{ id: 5, message: "I am learning js library - React" },
	]

	// Created contactItem & messageItem arrays from contactsData & messagesData arrays
	let contactItem = contactsData.map(c => <Contacts id={c.id} nickname={c.nickname} unread={c.unread} time={c.time} message={messagesData[messagesData.length - 1].message} />)
	let messageItem = messagesData.map(m => <Messages message={m.message} />)

	return (
		<div className="main-content_margin">
			<div className={s.chat_wrapper}>

				<div className={s.contacts_wrapper}>
					<h4 className={s.title}>Contacts</h4>
					{/* We transfer contactItem from array */}
					{contactItem}
				</div>

				<div className={s.messages}>
					<h4 className={s.title}>Messages</h4>
					{/* We transfer messageItem from array */}
					{messageItem}
				</div>
			</div>

		</div >
	)
}

export default Chat