import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className="fm-login-box">
        <form>
          <p>
            <label>Username</label>
            <input type="text" id="username"/>
          </p>
          <p>
            <label>Password</label>
            <input type="password" id="password" />
          </p>
          <p>
            <button className="loginButton">Login</button>
          </p>
        </form>
      </div>
    );
  }
}
