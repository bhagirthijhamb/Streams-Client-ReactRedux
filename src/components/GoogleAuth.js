import React from 'react';

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

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }
  renderAuthbutton(){
    if(this.state.isSignedIn === null){
      return <div>I dont know if we are figned in</div>
    } else if(this.state.isSignedIn){
      return <div>I am signed in!</div>
    } else {
      return <div>I am not signed in</div>
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

export default GoogleAuth;

// Auth Component
// - Get a reference to the 'auth' object after it is initialized
// - Figure out if the user is currently signed in
// - Print their authentication status on the screen