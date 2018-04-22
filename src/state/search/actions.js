import * as youtubeApi from 'api/youtube';
import actionTypes from './actionTypes';

export const search = (query) => async (dispatch) => {
  const context = [query];

  dispatch({
    type: actionTypes.SEARCH_STARTED,
    context
  });

  try {
    const results = await youtubeApi.search(query);
    dispatch({
      type: actionTypes.SEARCH_SUCCEEDED,
      context,
      payload: results
    });
  } catch (err) {
    dispatch({
      type: actionTypes.SEARCH_FAILED,
      context,
      payload: err
    });
  }
};
