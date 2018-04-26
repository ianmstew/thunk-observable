import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';
import loggingMiddleware from './loggingMiddleware';

export default [thunkMiddleware, promiseMiddleware, loggingMiddleware];
