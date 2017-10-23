import { USER_LOGGED_IN, USER_LOGGED_OUT } from './types'
import axios from 'axios'

export const userLoggedIn = user => ({
	type: USER_LOGGED_IN,
	user
})

export const userLoggedOut = () => ({
	type: USER_LOGGED_OUT
})

export const login = credentials => dispatch =>
	axios.post('/api/auth', { credentials })
		.then(res => res.data.user)
		.then(user => {
			localStorage.uniteJWT = user.token
			dispatch(userLoggedIn(user))
		})

export const logout = () => dispatch => {
  localStorage.removeItem("uniteJWT");
  dispatch(userLoggedOut());
};

export const confirm = token => dispatch =>
	axios.post('/api/auth/confirmation', { token })
		.then(res => {
			localStorage.uniteJWT = res.data.user.token
			dispatch(userLoggedIn(res.data.user))
		})

export const resetPasswordRequest = ({ email }) => () =>
	axios.post('/api/auth/reset_password_request', { email })

export const validateToken = token => () =>
	axios.post('/api/auth/validate_token', { token })

export const resetPassword = data => () =>
	axios.post('/api/auth/reset_password', { data })
