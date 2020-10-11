import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

	// Created postItem arrays from props.postsData arrays
	let postItem = props.postsData.map(p => <Post post={p.post} like={p.like} />)

	return (
		<div className="main-content_margin">
			<div className="grid__item">

				<div className={s.new_post}>
					<h4>My new post</h4>
					<div className={s.new_post} contenteditable="true"></div>
					<div className={s.button}>
						<a className="btn" href="#">Send</a>
					</div>

					{/* We transfer postItem from array */}
					{postItem}

				</div>

			</div>
		</div>
	)
}

export default MyPosts