import thunkMiddleware from 'redux-thunk';
import loggingMiddleware from './loggingMiddleware';

export default [thunkMiddleware, loggingMiddleware];
