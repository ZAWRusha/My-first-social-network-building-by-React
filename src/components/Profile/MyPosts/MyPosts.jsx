import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

	// Created postItem arrays from props.postsData arrays
	let postItem = props.postsData.map(p => <Post post={p.post} like={p.like} />)

	let newPostElement = React.createRef()

	let addPost = () => {
		props.addPost()
	}

	let onPostChange = () => {
		let text = newPostElement.current.value
		props.updateNewPostText(text)

	}

	return (
		<div className="main-content_margin">
			<div className="grid__item">

				<div className={s.new_post}>
					<h4>My new post</h4>
					{/* <div onChange={onPostChange} ref={newPostElement} className={s.new_message} contentEditable="true">{props.newPostText}</div> */}
					<textarea onChange={onPostChange} ref={newPostElement} className={s.new_message} value={props.newPostText} />
					<div className={s.button}>
						<button type="submit" className="btn" href="#" onClick={addPost}>Send</button>
					</div>

					{/* We transfer postItem from array */}
					{postItem}

				</div>

			</div>
		</div>
	)
}

export default MyPosts