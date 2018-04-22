import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import epic from './epic';
import logging from './logging';

export default (history) => ([
  thunk,
  epic,
  routerMiddleware(history),
  logging
]);
