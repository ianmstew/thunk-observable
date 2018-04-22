import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import 'rxjs';
import createHistory from 'history/createBrowserHistory';
import App from 'containers/App';
import Store from './Store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const initialState = {};
const history = createHistory();
const store = Store(initialState, history);

window.STORE = process.env.NODE_ENV !== 'production' ? store : window.STORE;
window.LOG_LEVEL = process.env.NODE_ENV !== 'production' ? 0 : 3;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
