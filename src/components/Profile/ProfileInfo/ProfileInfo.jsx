import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
	return (
		<div className={s.profile_wrapper}>
			<div className={s.img__content}></div>

			<div className={s.profile}>

				<div className={s.avatar_profile}></div>

				<div className={s.data_profile}>

					<div className={s.block_profile}>
						<h2 className={s.name_profile}>John Doe</h2>
						<div className={s.description}>Russia, Krasnoyarsk</div>
					</div>
					<div className="separator_v"></div>

					<div className={s.block_profile}>
						<h4 className={s.name_title}>Siberian Federal University</h4>
						<div className={s.description}>Education</div>
					</div>
					<div className="separator_v"></div>

					<div className={s.block_profile}>
						<h4 className={s.name_title}>+7-999-199-99-99</h4>
						<div className={s.description}>Telephone</div>
					</div>
					<div className="separator_v"></div>

					<div className={s.block_profile}>
						<h4 className={s.name_title}>mymail@gmail.com</h4>
						<div className={s.description}>Mail</div>
					</div>
					<div className="separator_v"></div>

					<div className={s.block_profile}>
						<h4 className={s.name_title}>1985.02.16</h4>
						<div className={s.description}>Date of birth</div>
					</div>

				</div>

			</div>
		</div>
	)
}

export default ProfileInfo