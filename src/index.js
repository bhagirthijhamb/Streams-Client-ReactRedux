import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>, document.querySelector('#root'));

// App Challenges
// Need to be able to navigate around to separate pages in our app
// Need to allow a user to login/logout
// Need to handle forms in Redux
// Need to master CRUD operations in React/Redux
// Need good error handling
