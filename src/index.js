import React from 'react';
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
// Redux Store
import { Provider } from 'react-redux'
import store from './store/store'
import './App.scss'
ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'))
serviceWorker.unregister();
