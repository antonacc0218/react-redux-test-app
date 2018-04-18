import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { authReducer } from './reducers';

const store = createStore(authReducer, localStorage.getItem('auth') === 'true');

store.subscribe(() => {
  const auth = store.getState();
  if (auth)
    localStorage.setItem('auth', 'true');
  else
    localStorage.removeItem('auth');
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
