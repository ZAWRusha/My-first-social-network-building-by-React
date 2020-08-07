import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'

const Profile = () => {
	return (
		<div>
			<div className={s.img__content}></div>
			<div className="grid__item">
				<div className={s.profile}>
					<div className={s.avatar_profile}></div>
					<div className={s.data_profile}>
						<h3 className={s.name_profile}>John Doe</h3>
						<div className={s.description_profile}>
							<p>Date of birth: <span>16 february</span></p>
							<p>City: <span>Krasnoyarsk</span></p>
							<p>Education: <span>KrasGASA</span></p>
							<p>Tel: <span>+7-999-199-99-99</span></p>
							<p>Web Site: <a href="">http://mySite.ru</a></p>
						</div>
					</div>
				</div>
				<div className={s.separator}></div>
				<MyPosts />
			</div>
		</div>
	)
}

export default Profile