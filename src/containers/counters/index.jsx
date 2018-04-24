import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'actions/counters';

import './counters.scss';

class Counters extends Component {
  onAddCounter() {
    this.props.addCounter();
  }

  onMagicCounter() {
    this.props.magicCounters();
  }

  onIncrement(counter) {
    this.props.incCounter(counter);
  }

  onDecrement(counter) {
    this.props.decCounter(counter);
  }

  render() {
    const { counters } = this.props;

    return (
      <div className="counters">
        <h3>
          <span>Counters</span>
          &nbsp;
          <button onClick={() => this.onAddCounter()}>+</button>
          <button onClick={() => this.onMagicCounter()}>**</button>
        </h3>

        <ul>
          {counters.map(counter => (
            <li key={counter.id}>
              <div className="counter-wrapper">
                <div className="counter-contents">
                  <h2>{counter.count}</h2>
                </div>
                <div className="counter-controls">
                  <div onClick={() => this.onIncrement(counter)}>+</div>
                  <div onClick={() => this.onDecrement(counter)}>-</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counters: state.counters,
});

const mapDispatchToProps = (dispatch) => ({
  addCounter: () => dispatch(actions.addCounter()),
  incCounter: (c) => dispatch(actions.incCounter(c)),
  decCounter: (c) => dispatch(actions.decCounter(c)),
  magicCounters: () => dispatch(actions.magicCounters(10)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counters);
