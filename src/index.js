import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Store from './Store';
import history from './utils/history';
import registerServiceWorker from './utils/registerServiceWorker';
import App from './containers/App';
import './index.css';

const store = Store(history);

window.STORE = process.env.NODE_ENV !== 'production' ? store : window.STORE;
window.LOG_LEVEL = process.env.NODE_ENV !== 'production' ? 0 : 3;
window.DEBUG_SLOW_PAGING = false;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
