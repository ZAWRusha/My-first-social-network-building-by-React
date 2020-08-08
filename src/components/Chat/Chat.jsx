import React from 'react'
import s from './Chat.module.css'

const Chat = (props) => {
	return (
		<div className={`${"grid__item"} ${s.chat_wrapper}`}>

			<div className={s.contacts}>
				<div className={s.title}>Contacts</div>
				<div className={s.name}>
					Dimych
				</div>
				<div className={s.name}>
					Andrey
				</div>
				<div className={s.name}>
					Valera
				</div>
				<div className={s.name}>
					Sveta
				</div>
				<div className={s.name}>
					Sasha
				</div>
			</div>

			<div className={s.messages}>
				<div className={s.title}>Messages</div>
				<div className={s.message}>Hi</div>
				<div className={s.message}>How is your study?</div>
				<div className={s.message}>I'am ok</div>
			</div>

		</div >
	)


}

export default Chat