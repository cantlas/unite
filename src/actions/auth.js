import { USER_LOGGED_IN, USER_LOGGED_OUT } from './types'

export const userLoggedIn = user => ({
	type: USER_LOGGED_IN,
	user
})
