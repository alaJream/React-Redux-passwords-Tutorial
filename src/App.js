import React from 'react';
import './App.css';
import Password from './Password';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = configureStore({ reducer: rootReducer });

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Password />
      </div>
    </Provider>
  );
}

export default App;
