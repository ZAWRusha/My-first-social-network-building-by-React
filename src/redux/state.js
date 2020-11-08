let store = {
	_state: {
		profilePage: {
			postsData: [
				{ id: 1, post: "Hi, how are you?", like: 2 },
				{ id: 2, post: "It's my second post.", like: 10 },
				{ id: 3, post: "Заметил что в псевдоэлементах :after и :before не работает calc() именно в safari даже в новом, у меня последняя версия стоит которая для siera (не high) и в моем случаи не работает с width или height, -webkit-calc пробовал не помогло(", like: 0 },
				{ id: 4, post: "Выражение представляет собой комбинацию значений размеров и следующих знаков математических действий.", like: 0 }
			],
			newPostText: 'Write a new post'
		},
		chatPage: {
			contactsData: [
				{ id: 1, nickname: "Dimych Kuzyberdin", unread: 5, time: "12:34", message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit..." },
				{ id: 2, nickname: "Petr Kharitonov", unread: 9, time: "12:34", message: "Although VS Code has some great built-in functionality for Git" },
				{ id: 3, nickname: "Alla Polyanskaya", unread: 1, time: "12:35", message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit adipisicing elit adipisicing elit" },
				{ id: 4, nickname: "Svetlana Torgasheva", unread: '', time: "14:40", message: "Who is there?" },
				{ id: 5, nickname: "Tony Bochka", unread: '', time: "20:03", message: "Dolor sit amet consectetur, adipisicing elit" }
			],
			messagesData: [
				{ id: 1, message: "Hi" },
				{ id: 2, message: "How is your study?" },
				{ id: 3, message: "I'am ok" },
				{ id: 4, message: "It's a good weather today" },
				{ id: 5, message: "I am learning js library - React" }
			]
		},
		// sidebar {

		// }
	},
	getState() {
		return this._state
	},
	_callSubscriber() {
		console.log('state was changed')
	},
	addPost() {
		let newPost = {
			id: 5,
			post: this._state.profilePage.newPostText,
			like: 0
		}
		this._state.profilePage.postsData.unshift(newPost)
		this._state.profilePage.newPostText = ''
		this._callSubscriber(this._state)
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText
		this._callSubscriber(this._state)
	},
	subscribe(observer) {
		this._callSubscriber = observer
	}
}

export default store
window.store = store