import axios from 'axios'
import { userLoggedIn } from './auth'

export const signup = user => dispatch =>
	axios
		.post('/api/users', { user })
		.then(res => {
			localStorage.uniteJWT = res.data.user.token
			dispatch(userLoggedIn(res.data.user))
		})