import React from 'react'
import { connect } from 'react-redux'
import { Container , Image } from 'semantic-ui-react'

const Dashboard = ({ isConfirmed, email, name }) => (
 <div>
 	{!isConfirmed && <h1>Please check {email} and confirm your email address.</h1>}
 
 	{isConfirmed && (
 		<div>
 		<h1>Welcome {name}!</h1>
 		<Image src='http://lorempixel.com/output/people-q-c-640-480-7.jpg' size='medium' shape='rounded' />
 		</div>
 		)}
 </div>
)

function mapStateToProps(state) {
	return {
		isConfirmed: !!state.user.confirmed,
		email: state.user.email,
		name: state.user.name
	}
}

export default connect(mapStateToProps)(Dashboard)