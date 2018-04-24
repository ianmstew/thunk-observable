import * as youtubeApi from 'api/youtube';
import actionTypes from './actionTypes';

export const search = () => async (dispatch, getState) => {
  const { query } = getState().search;

  dispatch({
    type: actionTypes.SEARCH_STARTED
  });

  try {
    const results = await youtubeApi.search(query);
    dispatch({
      type: actionTypes.SEARCH_SUCCEEDED,
      payload: results
    });
  } catch (error) {
    dispatch({
      type: actionTypes.SEARCH_FAILED
    });
  }
};

export const enter = () => (dispatch) => {
  dispatch(search());
};

export const loadPage = (pageToken) => (dispatch, getState) => {
  dispatch(setPageToken(pageToken));
  dispatch(search());
};

export const setPageToken = (pageToken) => ({
  type: actionTypes.SET_PAGE_TOKEN,
  payload: {
    pageToken
  }
});

export const setQueryTerm = (queryTerm) => ({
  type: actionTypes.SET_QUERY_TERM,
  payload: {
    queryTerm
  }
});

export const setVideoDuration = (videoDuration) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_VIDEO_DURATION,
    payload: {
      videoDuration
    }
  });
  dispatch(search());
};
