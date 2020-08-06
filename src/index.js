import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {StateProvider} from './redux/stateProvider';
import  AddBasket,{initialState} from './redux/Reducers/AddBasket';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={AddBasket}>
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

