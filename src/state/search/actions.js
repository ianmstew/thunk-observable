import * as youtubeApi from 'api/youtube';
import actionTypes from './actionTypes';

export const search = (query) => ({
  type: actionTypes.SEARCH,
  promise: youtubeApi.search(query)
});

export const loadPage = (pageToken) => ({
  type: actionTypes.LOAD_PAGE,
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

export const setVideoDuration = (videoDuration) => ({
  type: actionTypes.SET_VIDEO_DURATION,
  payload: {
    videoDuration
  }
});

export const enter = () => ({
  type: actionTypes.ENTER
});
