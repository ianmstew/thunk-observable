import * as actions from './actions';
import actionTypes from './actionTypes';

export const searchEpic = (action$, store) =>
  action$
    .filter(
      (action) =>
        action.type === actionTypes.SET_VIDEO_DURATION ||
        action.type === actionTypes.ENTER
    )
    .map((action) => actions.search(store.getState().search.query));

export const loadPageEpic = (action$, store) =>
  action$
    .filter((action) => action.type === actionTypes.LOAD_PAGE)
    .map((loadPageAction) =>
      actions.search({
        ...store.getState().search.query,
        ...loadPageAction.payload
      })
    );
