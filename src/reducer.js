import { combineReducers } from './utils';

import tiles from './reducers/tiles';

function test(state, action) {
  return state;
}

export default combineReducers({ tiles, test });
