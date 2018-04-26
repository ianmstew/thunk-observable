import * as actions from './actions';
import actionTypes from './actionTypes';
import { StartAsyncAction, ResultAsyncAction } from 'utils/async-actions';

export const searchEpic = (action$, store) =>
  action$
    .filter(
      (action) =>
        action.type === actionTypes.SUBMIT_SEARCH ||
        action.type === actionTypes.SET_VIDEO_DURATION ||
        action.type === actionTypes.ENTER
    )
    .map((action) =>
      StartAsyncAction(actions.search(store.getState().search.query))
    );

export const loadPageEpic = (action$, store) =>
  action$
    .filter((action) => action.type === actionTypes.LOAD_PAGE)
    .map((loadPageAction) =>
      StartAsyncAction(
        actions.search({
          ...store.getState().search.query,
          ...loadPageAction.payload
        })
      )
    );

export const handleSearchEpic = (action$, store) =>
  action$
    .filter((action) => action.sourceType === actionTypes.SEARCH)
    .switchMap(ResultAsyncAction);
