import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Login from './components/login';
import LoginBox from './components/loginBox';
import FilesList from './components/filesList';

class App extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div className="fm-container">
        <header>
          <h2 className="text-center"> FMC FILES </h2>
        </header>

        <LoginBox />

        { currentUser ?
          <FilesList />
        : ''}
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
  };
})(App);
