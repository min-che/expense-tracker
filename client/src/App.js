import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMoneyBillAlt, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FontAwesomeIcon className="App-logo" icon={faMoneyBillAlt} />
          <FontAwesomeIcon className="App-logo" icon={faCreditCard} />
          <FontAwesomeIcon className="App-logo" icon={faMoneyCheck} />
          <h1 className="App-title">Welcome to Expense Tracker</h1>
        </header>
        <p className="App-intro">
          ...in progress
        </p>
      </div>
    );
  }
}

export default App;
