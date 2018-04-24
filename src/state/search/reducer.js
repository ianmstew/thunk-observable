import loading from 'constants/loading';
import { VideoDuration } from './models';
import actionTypes from './actionTypes';

const initialState = {
  query: {
    queryTerm: '',
    videoDuration: VideoDuration.ANY,
    pageToken: ''
  },
  results: {
    loading: loading.INITIAL,
    data: []
  }
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_STARTED:
      return {
        ...state,
        results: {
          ...state.results,
          loading: loading.STARTED
        }
      };
    case actionTypes.SEARCH_SUCCEEDED:
      return {
        ...state,
        results: {
          ...state.results,
          loading: loading.SUCCEEDED,
          data: action.payload
        }
      };
    case actionTypes.SEARCH_FAILED:
      return {
        ...state,
        results: {
          ...state.results,
          loading: loading.FAILED
        }
      };
    case actionTypes.SET_QUERY_TERM:
      const { queryTerm } = action.payload;
      return {
        ...state,
        query: {
          ...state.query,
          queryTerm
        }
      };
    case actionTypes.SET_VIDEO_DURATION:
      const { videoDuration } = action.payload;
      return {
        ...state,
        query: {
          ...state.query,
          videoDuration
        }
      };
    case actionTypes.SET_PAGE_TOKEN:
      const { pageToken } = action.payload;
      return {
        ...state,
        query: {
          ...state.query,
          pageToken
        }
      };
    default:
      return state;
  }
}
