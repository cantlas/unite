import React, { Component } from 'react';

// Routing
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import Footer from './navigation/Footer'
import Header from './navigation/Header'
import Landing from './containers/Landing'
import Dashboard from './containers/Dashboard'
import ConfirmationPage from './containers/ConfirmationPage'
import ForgotPasswordPage from './containers/ForgotPasswordPage'
import ResetPasswordPage from './containers/ResetPasswordPage'
import About from './containers/About'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
            <div className="content">
              <Route path="/" exact component={Landing} />
              <Route path='/about' exact component={About} />
              <Route path='/dashboard' exact component={Dashboard} />
              <Route path='/confirmation/:token' exact component={ConfirmationPage} />
              <Route path='/forgot_password' exact component={ForgotPasswordPage} />
              <Route path='/reset_password/:token' exact component={ResetPasswordPage} />
            </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
