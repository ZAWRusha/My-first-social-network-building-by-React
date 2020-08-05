import React from 'react';

const Profile = () => {
	return <div className="content">

		<div className="img__content"></div>
		<div className="main__content grid__item">

			<div className="profile">
				<div className="avatar-profile"></div>
				<div className="data-profile">
					<h3 className="name-profile">Dmitry M.</h3>
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

			<div className="new-post">
				<h4>My new post</h4>
				<textarea type="text" className="textarea-new-message" placeholder="write your message" />
				<br />
				<a className="btn" href="">Send</a>
			</div>

			<div class="post">
				post
			</div>
			<div>
				post 1
			</div>
			<div>
				post 2
			</div>
		</div>
	</div>
}

export default Profile