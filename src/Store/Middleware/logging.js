import { log } from 'utils/loggers';

export default (store) => (next) => (action) => {
  const { type } = action || {};

  log(type, action);
  const ret = next(action);
  log(store.getState());

  return ret;
};
