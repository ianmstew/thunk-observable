import loading from 'constants/loading';
import { VideoDuration } from './models';
import actionTypes from './actionTypes';

const initialState = {
  query: {
    queryTerm: '',
    videoDuration: VideoDuration.ANY
  },
  results: {
    loading: loading.INITIAL,
    data: {}
  }
};

export default function searchReducer(state = initialState, action) {
  const newState = state;

  switch (action.type) {
    case actionTypes.SEARCH_STARTED:
      return {
        ...newState,
        results: {
          ...newState.results,
          loading: loading.STARTED
        }
      };
    case actionTypes.SEARCH_SUCCEEDED:
      return {
        ...newState,
        results: {
          ...newState.results,
          loading: loading.SUCCEEDED,
          data: action.payload
        }
      };
    case actionTypes.SEARCH_FAILED:
      return {
        ...newState,
        results: {
          ...newState.results,
          loading: loading.FAILED
        }
      };
    case actionTypes.SET_QUERY_TERM:
      const { queryTerm } = action.payload;
      return {
        ...newState,
        query: {
          ...newState.query,
          queryTerm
        }
      };
    case actionTypes.SET_VIDEO_DURATION:
      const { videoDuration } = action.payload;
      return {
        ...newState,
        query: {
          ...newState.query,
          videoDuration
        }
      };
    default:
      return newState;
  }
}
