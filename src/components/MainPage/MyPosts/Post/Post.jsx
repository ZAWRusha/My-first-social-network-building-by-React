import React from 'react'
import s from './Post.module.css'

const Post = () => {
	return (<div className={s.post}>
		<img src={require("../../../../ava/ava3.jpg")} alt="ava3" />
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, voluptas rem.
		</p>
		<br />
	</div>
	)
}

export default Post