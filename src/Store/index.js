import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'state/reducer';
import middleware from './middleware';

export default function Store() {
  return createStore(rootReducer, applyMiddleware(...middleware));
}
