import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
	return (
		<div className={s.new_post}>
			<h4>My new post</h4>
			<div className={s.new_message} contenteditable="true"></div>
			<div className={s.button}>
				<a className="btn" href="">Send</a>
			</div>
			<Post />
			<Post />
			<Post />

		</div>
	)
}

export default MyPosts