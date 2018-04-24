import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './app.scss';
import Counters from './containers/counters';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>React/Redux Simple App</h1>
        </header>

        <main>
          <Counters />
        </main>
      </div>
    );
  }
}

export default App;
