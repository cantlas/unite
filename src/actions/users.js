import axios from 'axios'
import { userLoggedIn } from './auth'

export const signup = data => dispatch =>
	axios
		.post('/api/users', { data })
		.then(res => res.data.user)
		.then(user => {
			localStorage.unite = user.token
			dispatch(userLoggedIn(user))
		})