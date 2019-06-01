export const combineReducers = (reducers) => (state, action) => {
  return Object.keys(reducers).reduce((acc, reducer) =>
    ({ ...acc, [reducer]: reducers[reducer](state[reducer], action) }),{});
};

