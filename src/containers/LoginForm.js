import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../actions/auth'
import InlineError from '../messages/InlineError'
import { Form, Button, Message, Container } from 'semantic-ui-react'
import Validator from 'validator'

class LoginForm extends React.Component {
	state = {
		data: {
			email: "",
			password: ""
		},
		loading: false,
		errors: {}
	}

	onChange = e =>
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value }
		})

	onSubmit = () => {
		const errors = this.validate(this.state.data)
		this.setState({ errors })
		if (Object.keys(errors).length === 0) {
			this.setState({ loading: true })
			this.props
				.login(this.state.data)
				.then(() => this.props.history.push('dashboard'))
				.catch(err =>
					this.setState({ errors: err.response.data.errors, loading: false })
				)
		}
	}

	validate = data => {
		const errors = {}
		if (!Validator.isEmail(data.email)) errors.email = "Invalid email"
		if (!data.password) errors.password = "Can't be blank"
		return errors
	}

	render() {

		const { data, errors, loading } = this.state

		return (
			<Container>
			<Form onSubmit={this.onSubmit} loading={loading}>
				{errors.global && (
					<Message negtive>
						<Message.Header>Something went wrong</Message.Header>
						<p>{errors.global}</p>
					</Message>
				)}
				<Form.Field error={!!errors.email}>
					<label htmlFor="email">Email</label>
					<Form.Input
						type="email"
						id="email"
						name="email"
						placeholder="example@example.com"
						value={data.email}
						onChange={this.onChange}
						icon='user'
						iconPosition='left'
					/>
					{errors.email && <InlineError text={errors.email} />}
				</Form.Field>
				<Form.Field error={!!errors.password}>
					<label htmlFor="password">Password</label>
					<Form.Input
						type="password"
						id="password"
						name="password"
						placeholder="Make it secure"
						value={data.password}
						onChange={this.onChange}
						icon='lock'
						iconPosition='left'
					/>
					{errors.password && <InlineError text={errors.password} />}
				</Form.Field>
				<Button primary>Login</Button>
			</Form>
			</Container>
		)
	}
}

export default connect(null, {login})(LoginForm)