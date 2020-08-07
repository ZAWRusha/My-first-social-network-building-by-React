import React from 'react'
import './MainPage.css'
import MyPosts from './MyPosts/MyPosts.jsx'

const MainPage = () => {
	return (
		<div className="content">

			<div className="img__content"></div>
			<div className="main__content grid__item">

				<div className="profile">
					<div className="avatar-profile"></div>
					<div className="data-profile">
						<h3 className="name-profile">John Doe</h3>
						<div className="description-profile">
							<p>Date of birth: <span>16 february</span></p>
							<p>City: <span>Krasnoyarsk</span></p>
							<p>Education: <span>KrasGASA</span></p>
							<p>Tel: <span>+7-999-199-99-99</span></p>
							<p>Web Site: <a href="">http://mySite.ru</a></p>
						</div>
					</div>
				</div>
				<div className="separator"></div>

				<MyPosts />

			</div>
		</div>
	)
}

export default MainPage