import React from 'react'
import { connect } from 'react-redux'
import { Container, Image, Segment, Button, Grid} from 'semantic-ui-react'

const Dashboard = ({ isConfirmed, email, name }) => (
 <div>

 	{!isConfirmed && <h1>Please check {email} and confirm your email address.</h1>}
 
 	{isConfirmed && (
 		<Container>
 		<Grid columns={2}>
	 		<Grid.Column>
	 		<h1>Get ready to Unite!</h1>
	 		<Image src='http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png' size='small' avatar>
	 		</Image>
	 		</Grid.Column>
	 		<Grid.Column>
	 			<Button>
	 			Plan an event
	 			</Button>
	 			<Button>
	 			Browse events
	 			</Button>
	 		</Grid.Column>
 		</Grid>
 		<Grid columns={2}>
 		<Grid.Column>
 		<Segment>
 			<h2>My events</h2>
 		</Segment>
 		</Grid.Column>
 		<Grid.Column>
 		<Segment>
 			<h2>Favourited events</h2>
 		</Segment>
 		</Grid.Column>
 		</Grid>
 		</Container>
 		)}
 </div>
)

function mapStateToProps(state) {
	return {
		isConfirmed: !!state.user.confirmed,
		email: state.user.email,
		name: state.user.username
	}
}

export default connect(mapStateToProps)(Dashboard)