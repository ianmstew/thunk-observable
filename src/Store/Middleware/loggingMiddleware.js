import { log, logError } from 'utils/loggers';

export default (store) => (next) => (action) => {
  const { type, meta: { error } = {} } = action || {};

  log(type, action);
  if (error) {
    logError(error);
  }
  const ret = next(action);
  log(store.getState());

  return ret;
};
