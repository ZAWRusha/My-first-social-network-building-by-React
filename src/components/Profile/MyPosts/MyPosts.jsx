import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {

	// posts data downloaded from the server
	let postsData = [
		{ post: "Hi, how are you?", like: 2 },
		{ post: "It's my second post.", like: 10 },
		{ post: "Заметил что в псевдоэлементах :after и :before не работает calc() именно в safari даже в новом, у меня последняя версия стоит которая для siera (не high) и в моем случаи не работает с width или height, -webkit-calc пробовал не помогло(", like: '' },
		{ post: "Выражение представляет собой комбинацию значений размеров и следующих знаков математических действий.", like: '' }
	]

	// Created postItem arrays from postsData arrays
	let postItem = postsData.map(p => <Post post={p.post} like={p.like} />)

	return (
		<div className="main-content_margin">
			<div className="grid__item">

				<div className={s.new_post}>
					<h4>My new post</h4>
					<div className={s.new_post} contenteditable="true"></div>
					<div className={s.button}>
						<a className="btn" href="">Send</a>
					</div>

					{/* We transfer postItem from array */}
					{postItem}

				</div>

			</div>
		</div>
	)
}

export default MyPosts