import React from 'react'
import { Container , Form , Button } from 'semantic-ui-react'
import { signup } from '../actions/users'
import { connect } from 'react-redux'
import isEmail from 'validator/lib/isEmail'
import InlineError from '../messages/InlineError'

class SignupForm extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			data: {
				email: "",
				password: ""
			},
			loading: false,
			errors: {}
		}
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
		this.validate = this.validate.bind(this)
	}

	onChange(e) {
		this.setState({
			...this.state,
			data: { ...this.state.data, [e.target.name]: e.target.value}
		})
	}

	onSubmit(e) {
		e.preventDefault()
		const errors = this.validate(this.state.data)
		this.setState({ errors })
		if (Object.keys(errors).length === 0) {
			this.setState({ loading: true })
			this.props
				.signup(this.state.data)
				.then(() => this.props.history.push('/dashboard'))
				.catch(err => {
					console.log(err.response)
					this.setState({ errors: err.response.data.errors, loading: false} )
				}
				)
		}
	}

	validate(data) {
		const errors = {}

		if (!isEmail(data.email)) errors.email = 'Invalid email'
		if (!data.password) errors.password = "Can't be blank"

		return errors
	}

	render() {

		const { data, errors, loading } = this.state

	return (
	<Container>
	{errors.message && <InlineError text={errors.message} />}
		<Form onSubmit={this.onSubmit} loading={loading}>
			<Form.Field error={!!errors.email}>
				<label>Email</label>
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
				<label>Password</label>
				<Form.Input
					type="password"
					id="password"
					name="password"
					placeholder="Make it secure."
					value={data.password}
					onChange={this.onChange}
					icon='lock'
					iconPosition='left'
				/>
				{errors.password && <InlineError text={errors.password} />}
			</Form.Field>

			<Button primary>Signup</Button>
		</Form>
	</Container>
	)
	}
}

export default connect(null, { signup })(SignupForm)