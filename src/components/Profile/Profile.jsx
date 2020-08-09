import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'

const Profile = () => {
	return (
		<div>
			<div className={s.profile_wrapper}>
				<div className={s.img__content}></div>

				<div className={s.profile}>

					<div className={s.avatar_profile}></div>

					<div className={s.data_profile}>


						<div className={s.block}>
							<h2 className={s.name_title}>John Doe</h2>
							<div className={s.description}>Russia, Krasnoyarsk</div>
						</div>
						<div className="separator_v"></div>

						<div className={s.block}>
							<h4 className={s.name_profile}>Siberian Federal University</h4>
							<div className={s.description}>Education</div>
						</div>
						<div className="separator_v"></div>

						<div className={s.block}>
							<h4 className={s.name_profile}>+7-999-199-99-99</h4>
							<div className={s.description}>Telephone</div>
						</div>
						<div className="separator_v"></div>

						<div className={s.block}>
							<h4 className={s.name_profile}>mymail@gmail.com</h4>
							<div className={s.description}>Mail</div>
						</div>
						<div className="separator_v"></div>

						<div className={s.block}>
							<h4 className={s.name_profile}>1985.02.16</h4>
							<div className={s.description}>Date of birth</div>
						</div>

					</div>

				</div>
			</div>

			<div className="main-content_margin">
				<div className="grid__item">
					<MyPosts />
				</div>
			</div>

		</div>
	)
}

export default Profile