import uuid from 'uuid';
import { ACTION_TYPES } from '../actions/counters';

const counters = (state = [], action = {}) => {
  switch (action.type) {
    case ACTION_TYPES.INC_COUNTER: {
      const counter = action.payload || {};
      return state.map(c => (c.id === counter.id) ? { id: c.id, count: c.count + 1 } : c);
    }

    case ACTION_TYPES.DEC_COUNTER: {
      const counter = action.payload || {};
      return (counter.count > 0) ? state.map(c => (c.id === counter.id) ? { id: c.id, count: c.count - 1 } : c) : state;
    }

    case ACTION_TYPES.ADD_COUNTER: {
      return state.concat({ id: uuid.v4(), count: action.payload || 0 });
    }

    default:
      return state;
  }
};

export default counters;
