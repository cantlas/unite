import React, { Component } from 'react';
import axios from 'axios'

// Routing
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import Footer from './navigation/Footer'
import Landing from './containers/Landing'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }
  componentDidMount() {
    axios.get('/api/listing')
      .then((result) => this.setState({title: result.data.locale}))
      .catch((err) => console.log(err))
  }
  render() {
    return (
      <Router>
        <div className="wrapper">
            <div className="content">
              <Route path="/" exact component={Landing} />
            </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
