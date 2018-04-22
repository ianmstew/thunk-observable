import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'state/reducer';
import Middleware from './Middleware';

export default function Store(initialState = {}, history) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...Middleware(history))
  );

  return store;
}
