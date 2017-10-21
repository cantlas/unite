import React from 'react'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'
import { resetPasswordRequest } from '../actions/auth'
import ForgotPasswordForm from './ForgotPasswordForm'


class ForgotPasswordPage extends React.Component {
	state = {
		success: false
	}

	submit = data =>
		this.props
		.resetPasswordRequest(data)
		.then(() => this.setState({ success: true }))

  render() {
    return (
      <div>
        {this.state.success ? (
          <Message>Email has been sent.</Message>
        ) : (
          <ForgotPasswordForm submit={this.submit} />
        )}
      </div>
    );
  }
}

export default connect(null, { resetPasswordRequest })(ForgotPasswordPage)