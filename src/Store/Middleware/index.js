import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import loggingMiddleware from './loggingMiddleware';

export default (history) => [
  thunkMiddleware,
  routerMiddleware(history),
  loggingMiddleware
];
