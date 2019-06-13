import React, { useReducer } from 'react';

import Store from './store';
import reducer from './reducer'
import initialState from './initialState';

import TilesContainer from './components/TilesContainer';
import Header from './components/Header';

import './App.css';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="root">
      <Store.Provider value={{ store: state, dispatch }}>
        <Header/>
        <TilesContainer/>
      </Store.Provider>
    </div>
  );
}

export default App;
