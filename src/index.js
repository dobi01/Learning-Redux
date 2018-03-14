import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import reducer from './reducer';
import { addComment } from './actions';
import DevTools from './DevTools';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  reducer,
  DevTools.instrument()
);

const boundAddComment = text => store.dispatch(addComment(text));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

boundAddComment('We are in this journey together');
boundAddComment('Dream Plan Do');
boundAddComment('The best time is right now');
