import React from 'react'
import { Button } from 'semantic-ui-react'
import { logout } from '../actions/auth'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class Header extends React.Component {
	logout = () => {
		this.props.logout()
		this.props.history.push('/')
	}
	render() {
		return (
			<div className="nav-header">
				{this.props.userLoggedIn && <Button secondary floated='right' onClick={this.logout}>Logout</Button>}
			</div>
			)
	}
}

function mapStateToProps(state) {
	return {
		userLoggedIn: state.user.email
	}
}

export default withRouter(connect(mapStateToProps, {logout})(Header))