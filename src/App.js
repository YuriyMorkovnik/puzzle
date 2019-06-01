import React, { useReducer } from 'react';

import Store from './store';
import reducer from './reducer'
import initialState from './initialState';

import TilesContainer from './components/TilesContainer';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app-root">
      <Store.Provider value={{ store: state, dispatch }}>
        <TilesContainer/>
      </Store.Provider>
    </div>
  );
}

export default App;
