import React from 'react'
import s from './Chat.module.css'
import Contacts from './Contacts/Contacts'
import Messages from './Messages/Messages'
// import { NavLink } from 'react-router-dom'

const Chat = (props) => {

	// Created contactItem & messageItem arrays from contactsData & messagesData arrays
	let contactItem = props.state.contactsData.map(c => <Contacts id={c.id} nickname={c.nickname} unread={c.unread} time={c.time} message={props.state.messagesData[props.state.messagesData.length - 1].message} />)
	let messageItem = props.state.messagesData.map(m => <Messages message={m.message} />)

	return (
		<div className="main-content_margin">
			<div className={s.chat_wrapper}>

				<div className={s.contacts_wrapper}>
					<h4 className={s.title}>Contacts</h4>
					{/* We transfer contactItem from array */}
					{contactItem}
				</div>

				<div className={s.messages}>

					<div className={s.messages_box}>
						<h4 className={s.title}>Messages</h4>
						{/* We transfer messageItem from array */}
						{messageItem}
					</div>

					<div className={s.my_new_message}>
						<h4>my new message</h4>
						<div className={s.new_message} contenteditable="true"></div>
						<div className={s.button}>
							<button type="submit" className="btn" href="#">Send</button>
						</div>
					</div>

				</div>
			</div>

		</div >
	)
}

export default Chat