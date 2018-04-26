import { StartAsyncAction, ResultAsyncAction } from 'utils/async-actions';

export default (store) => (next) => async (action) => {
  if (action.promise) {
    const startAction = StartAsyncAction(action);
    next(startAction);
    next(await ResultAsyncAction(startAction));
  }

  return next(action);
};
