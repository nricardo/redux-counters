export const ACTION_TYPES = {
  ADD_COUNTER: 'ADD_COUNTER',
  INC_COUNTER: 'INC_COUNTER',
  DEC_COUNTER: 'DEC_COUNTER',
};

export const addCounter = () => ({ type: ACTION_TYPES.ADD_COUNTER });
export const incCounter = (counter) => ({ type: ACTION_TYPES.INC_COUNTER, payload: counter });
export const decCounter = (counter) => ({ type: ACTION_TYPES.DEC_COUNTER, payload: counter });

export const magicCounters = (n) => {
  return (dispatch) => {
    for (let i=0; i !== n; ++i) dispatch(addCounter());
  };
};
