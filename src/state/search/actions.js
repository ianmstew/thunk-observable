import * as youtubeApi from 'api/youtube';
import actionTypes from './actionTypes';

export const search = (query) => async (dispatch) => {
  dispatch({
    type: actionTypes.SEARCH,
    promise: youtubeApi.search(query)
  });
};

export const loadPage = (pageToken) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.LOAD_PAGE,
    payload: {
      pageToken
    }
  });
  dispatch(
    search({
      ...getState().search.query,
      pageToken
    })
  );
};

export const setQueryTerm = (queryTerm) => ({
  type: actionTypes.SET_QUERY_TERM,
  payload: {
    queryTerm
  }
});

export const setVideoDuration = (videoDuration) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.SET_VIDEO_DURATION,
    payload: {
      videoDuration
    }
  });
  dispatch(search(getState().search.query));
};

export const enter = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ENTER
  });
  dispatch(search(getState().search.query));
};
