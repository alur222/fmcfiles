import React from 'react';


export default class LoginBox extends React.Component {
  handleLoginManager(event) {
    debugger;
  }

  handleLoginStaff(event) {
    debugger;
  }

  render() {
    return (
      <div className="fm-login-box ">
        <button className="fm-login-buttons" onClick={this.handleLoginManager.bind(this)}>Login as Manager</button>
        <button className="fm-login-buttons" onClick={this.handleLoginStaff.bind(this)}>Login as Staff</button>        
      </div>
    );
  }

}