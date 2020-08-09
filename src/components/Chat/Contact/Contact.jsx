import React from 'react'
import s from './Contact.module.css'

const Contact = (props) => {
	return (
		<div className={s.contact}>
			<img src={require("../../../ava/ava2.jpg")} alt="ava3" className="ava_round" />

			<div className={s.contact_wrapper}>

				<div className={s.title}>
					<div className={s.title_top}>
						<h4 className={s.name}>Dimych Kuzyberdin</h4>
						<div className={`${s.status} ${s.status_on}`}></div>
					</div>
					<div className={s.date_last_online}>12:34</div>
				</div>

				<div className={s.message}>
					<div className={s.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</div>
					<div className={s.count}>9</div>
				</div>

			</div>

		</div>
	)
}

export default Contact