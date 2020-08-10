import React from 'react'
import s from './Contact.module.css'
import { NavLink } from 'react-router-dom'

const Contact = (props) => {
	return (
		<NavLink to={"/Chat/" + props.id} activeClassName={s.activeLink} className={s.contact}>

			<img src={require("../../../ava/ava2.jpg")} alt="ava3" className={`ava_round ${s.ava}`} />

			<div className={s.contact_wrapper}>

				<div className={s.title}>
					<div className={s.title_top}>
						<h4 className={s.name}>{props.niсkname}</h4>
						<div className={`${s.status} ${s.status_on}`}></div>
					</div>
					<div className={s.date_last_online}>12:34</div>
				</div>

				<div className={s.message}>
					<div className={s.text}>{props.message}</div>
					<div className={s.count}>{props.unread}</div>
				</div>

			</div>

		</NavLink>
	)
}

export default Contact