import React, { Component } from 'react';
import Login from './components/login';
import AccountsUIWrapper from './AcAccountsUIWrapper';

export default class App extends Component {
  render() {
    return (
      <div className="fm-container">
        <header>
          <h2 className="text-center"> FMC FILES </h2>
        </header>

        <AccountsUIWrapper />
      </div>
    );
  }
}
