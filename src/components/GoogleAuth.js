import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from './../actions';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null }
  componentDidMount(){
    // load additional library and pass a callback function as second arg that is called after this addtional module is loaded up
    window.gapi.load('client:auth2', () => {
      // async request to google to initialize out client(it returns us a promise)
      // so we use .then()
      window.gapi.client.init({
        clientId: '867139672249-vhtl7g75hjurbrgr5rv0qbvg5koginio.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    })
  }
  // Arrow functions because these are calback functions
  onAuthChange = (isSignedIn) => {
    // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    if(isSignedIn){
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  }
  onSignInClick = () => {
    this.auth.signIn();
  }
  onSignOutClick = () => {
    this.auth.signOut();
  }
  renderAuthbutton(){
    if(this.state.isSignedIn === null){
      return <div>I dont know if we are figned in</div>
    } else if(this.state.isSignedIn){
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon"></i>
            Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon"></i>
          Sign In with Google
        </button>
        )
    }
  }

  render(){
    return (
      <div>
        {this.renderAuthbutton()}
      </div>
    )
  }
}

export default connect(null, { signIn, signOut })(GoogleAuth);

// Auth Component
// - Get a reference to the 'auth' object after it is initialized
// - Figure out if the user is currently signed in
// - Print their authentication status on the screen