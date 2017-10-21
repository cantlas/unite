import React from 'react'
import { Container , Divider } from 'semantic-ui-react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

class Landing extends React.Component {
	state = {
		toggleLogin: false
	}

	toggleLogin = () => {
		this.setState({
			toggleLogin: !this.state.toggleLogin
		})
	}

	render() {
	return (
	<Container>
		<h1 className='main-head'>Yard.</h1>
		{this.state.toggleLogin ? (
		<div>
		<LoginForm />
		<Container textAlign='right'>
		Don't have an account? &nbsp; <span className='link' onClick={this.toggleLogin}>Sign up</span>
		</Container>
		</div>
		)
		: (
		<div>
		<SignupForm />
		<Container textAlign='right'>
		Already have an account? &nbsp; <span className='link' onClick={this.toggleLogin}>Log in</span>
		</Container>
		</div>
		)}

	</Container>
	)
 }
}

export default Landing