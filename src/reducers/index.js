import { combineReducers } from 'redux';

// all reducers
import counters from './counters';

// build root level reducer
const reducer = combineReducers({
  counters,
});

export default reducer;
