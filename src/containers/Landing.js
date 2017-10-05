import React from 'react'
import { Tab } from 'semantic-ui-react'
import SignupForm from './SignupForm'

const Landing = () => (
	<Tab panes={[{ menuItem: 'Signup', render: () => <SignupForm />},{ menuItem: 'Login', pane: 'Login'}]} />
)
export default Landing