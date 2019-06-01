import React, { useContext } from 'react';

import Store from '../store';


function useStore(getState) {
  const { store, dispatch } = useContext(Store);
  return [getState(store), dispatch];
}

export default useStore;
