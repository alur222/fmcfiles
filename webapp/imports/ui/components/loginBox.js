import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { loginAsRole } from '../../methods/accounts/login';

class LoginBox extends React.Component {
  handleLoginManager(event) {
    // This is not secure as we login using hardcoded credentials
    // Normally, we let users input username and password
    // for demo, i am hard coding it here.
    Meteor.loginWithPassword('admin', 'manager1234', function(err) {
      if (err) alert(err);
    });
  }

  handleLoginStaff(event) {
    // This is not secure as we login using hardcoded credentials
    // Normally, we let users input username and password
    // for demo, i am hard coding it here.
    Meteor.loginWithPassword('iamstaff', 'staff1234', function(err) {
      if (err) alert(err);
    });
  }

  handleLogout(event) {
    Meteor.logout();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="fm-login-box ">
        { !currentUser ?
          <div>
            <button className="fm-login-buttons" onClick={this.handleLoginManager.bind(this)}>Login as Manager</button>
            <button className="fm-login-buttons" onClick={this.handleLoginStaff.bind(this)}>Login as Staff</button>
          </div>   
        :
          <div>
            <p> Logged in as {currentUser.profile.name} </p>
            <button className="fm-login-buttons" onClick={this.handleLogout.bind(this)}>Logout</button>
          </div>
        }
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
  };
})(LoginBox);