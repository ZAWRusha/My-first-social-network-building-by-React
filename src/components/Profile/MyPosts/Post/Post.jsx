import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
	return (
		<div className={s.post}>
			<img src={require("../../../../ava/ava3.jpg")} alt="ava3" className="ava_round" />
			<p className={s.post_text}>
				{props.message}
			</p>
			<div className={s.like}>
				{props.like}
			</div>
			<br />
		</div>
	)
}

export default Post