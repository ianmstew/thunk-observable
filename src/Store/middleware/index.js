import epicMiddleware from './epicMiddleware';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';
import loggingMiddleware from './loggingMiddleware';

export default [
  epicMiddleware,
  thunkMiddleware,
  promiseMiddleware,
  loggingMiddleware
];
