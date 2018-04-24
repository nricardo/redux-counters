import reducers from 'reducers';
import { ACTION_TYPES } from './actions/counters';

const fibonnaci = (n) => {
  if (n <= 1) return 1;

  return fibonnaci(n - 1) + fibonnaci(n - 2);
}

const N = 8;
let init = { counters: [] };
for (let i=0; i !== N; ++i)
  init = reducers(init, { type: ACTION_TYPES.ADD_COUNTER, payload: fibonnaci(i) });

export default init;
