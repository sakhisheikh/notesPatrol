import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import authClient from './Auth'

class Callback extends Component {

  componentDidMount() {
    const { history, auth } = this.props;
    // try {
    console.log("Hi")
    authClient.handleAuthentication().then(() => {
      history.push('/features');
    });

    //  }
    // catch (e) {
    //   console.log("bye");
    //   history.push('/');
    // }
  }

  render() {
    return (
      <div>
        Loading...
    </div >
    )
  }
}

export default withRouter(Callback);
